const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['https://hextech-website.vercel.app/', 'http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST'],
  credentials: true
}));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions, please try again later.'
});

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,                     // SSL port
  secure: true,                  // must be true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact form submission endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { fullName, email, title, message } = req.body;

    // Validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Full Name, Email, and Message are required fields.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: fullName.trim().substring(0, 100),
      email: email.trim().toLowerCase(),
      title: title ? title.trim().substring(0, 100) : '',
      message: message.trim().substring(0, 1000)
    };

    // Email to HexTech team (info@hextech.ae)
    const teamEmailOptions = {
      from: 'info@hextech.ae',
      to: 'info@hextech.ae',
      subject: `New Form Submission${sanitizedData.title ? ` - ${sanitizedData.title}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #007fc2, #005c91); padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Form Submission</h2>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #007fc2; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${sanitizedData.fullName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            ${sanitizedData.title ? `<p><strong>Title:</strong> ${sanitizedData.title}</p>` : ''}
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="color: #007fc2; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px; border-left: 4px solid #007fc2;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Note:</strong> Please respond to this inquiry promptly. The customer is expecting a response from info@hextech.ae.
            </p>
          </div>
        </div>
      `
    };

    // Confirmation email to the user (only from info@hextech.ae)
    const userConfirmationOptions = {
      from: 'info@hextech.ae',
      to: sanitizedData.email,
      subject: 'Thank you for contacting HexTech - We\'ve received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #007fc2, #005c91); padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 28px;">Thank You!</h2>
          </div>
          
          <div style="padding: 20px;">
            <p style="font-size: 18px; color: #333;">Dear ${sanitizedData.fullName},</p>
            
            <p style="line-height: 1.6; color: #555;">
              Thank you for reaching out to <strong style="color: #007fc2;">HexTech</strong>. We've successfully received your message and appreciate your interest in our services.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007fc2;">
              <h3 style="color: #007fc2; margin-top: 0;">Your Message Summary</h3>
              ${sanitizedData.title ? `<p><strong>Subject:</strong> ${sanitizedData.title}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="line-height: 1.6; color: #555;">
              Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>. In the meantime, feel free to explore our services and solutions on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background: linear-gradient(135deg, #007fc2, #005c91); padding: 15px; border-radius: 8px; display: inline-block;">
                <p style="color: white; margin: 0; font-weight: bold;">HexTech - Innovative tech solutions that scale with you</p>
              </div>
            </div>
            
            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: 30px;">
              <p style="color: #666; font-size: 14px; line-height: 1.6;">
                <strong>Contact Information:</strong><br>
                Email: info@hextech.ae<br>
                Location: Dubai, Dubai Internet City
              </p>
              
              <p style="color: #666; font-size: 12px; margin-top: 15px;">
                This is an automated confirmation email. Please do not reply directly to this message. 
                If you have urgent inquiries, please contact us at info@hextech.ae.
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(teamEmailOptions),
      transporter.sendMail(userConfirmationOptions)
    ]);

    console.log(`Contact form submission processed: ${sanitizedData.fullName} <${sanitizedData.email}>`);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later or contact us directly at info@hextech.ae.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HexTech Contact API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`HexTech Contact API server running on port ${PORT}`);
});