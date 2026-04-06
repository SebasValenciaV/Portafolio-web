import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

dotenv.config();

console.log('--- SERVER STARTING ---');
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('SMTP Config:', { 
  host: process.env.SMTP_HOST || 'smtp.gmail.com', 
  user: process.env.SMTP_USER || 'Not set',
  passSet: !!process.env.SMTP_PASS
});

async function startServer() {
  const app = express();
  
  // Basic middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Health Check
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      message: 'Server is alive',
      env: process.env.NODE_ENV,
      smtpConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASS)
    });
  });

  // API Route for Contact Form
  app.post('/api/contact', async (req, res) => {
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log('Request Body:', JSON.stringify(req.body, null, 2));
    const { name, email, company, projectType, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      console.warn('Validation failed: Missing required fields');
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    try {
      // Configure transporter
      const transporterConfig = {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS?.replace(/\s/g, ''),
        },
      };
      console.log('Transporter Config (sanitized):', { ...transporterConfig, auth: { ...transporterConfig.auth, pass: '***' } });
      const transporter = nodemailer.createTransport(transporterConfig);

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER || 'noreply@example.com'}>`,
        to: 'sebasvalenciav.gia@gmail.com',
        replyTo: email,
        subject: `Nuevo Proyecto: ${projectType || 'General'} - ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || 'N/A'}\nTipo: ${projectType}\n\nMensaje:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 20px;">
            <h2 style="color: #3b82f6; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
              <p><strong>Tipo de Proyecto:</strong> ${projectType || 'No especificado'}</p>
            </div>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; font-style: italic;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #64748b; text-align: center;">Enviado desde el formulario de contacto de tu portafolio.</p>
          </div>
        `,
      };

      // Only attempt to send if SMTP credentials are provided
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP credentials missing. Form submission logged to console only.');
        console.log('Form Data:', { name, email, company, projectType, message });
        return res.status(200).json({ 
          success: true, 
          warning: 'El mensaje se registró en el servidor pero no se pudo enviar el correo por falta de configuración SMTP.' 
        });
      }

      console.log('Attempting to send email via SMTP...');
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error enviando email:', error);
      res.status(500).json({ error: 'Error al enviar el mensaje. Por favor intenta más tarde.' });
    }
  });

  // Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    try {
      console.log('Initializing Vite middleware...');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
      console.log('Vite middleware initialized.');
    } catch (err) {
      console.error('Failed to initialize Vite middleware:', err);
    }
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('FATAL ERROR STARTING SERVER:', err);
});
