const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,          // SSL port
  secure: true,       // must be true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter on cold start
transporter.verify((error, success) => {
  if (error) {
    console.error('Email config error:', error);
  } else {
    console.log('Email server is ready');
  }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, title, message } = req.body;

    // Validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Full Name, Email, and Message are required fields.'
      });
    }

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

    // Email to HexTech team
    const teamEmailOptions = {
      from: 'info@hextech.ae',
      to: 'info@hextech.ae',
      subject: `New Form Submission${sanitizedData.title ? ` - ${sanitizedData.title}` : ''}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.fullName}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        ${sanitizedData.title ? `<p><strong>Title:</strong> ${sanitizedData.title}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
      `
    };

    // Confirmation email to user
    const userConfirmationOptions = {
      from: 'info@hextech.ae',
      to: sanitizedData.email,
      subject: "Thank you for contacting HexTech - We've received your message",
      html: `
        <h2>Thank You, ${sanitizedData.fullName}!</h2>
        <p>We’ve received your message and will get back to you within 24–48 hours.</p>
        ${sanitizedData.title ? `<p><strong>Subject:</strong> ${sanitizedData.title}</p>` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(teamEmailOptions),
      transporter.sendMail(userConfirmationOptions)
    ]);

    console.log(`✅ Contact form processed: ${sanitizedData.fullName} <${sanitizedData.email}>`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We’ll get back to you soon.'
    });

  } catch (error) {
    console.error('❌ Error in contact API:', error);
    return res.status(500).json({
      success: false,
      message: 'Sorry, something went wrong. Please try again later.'
    });
  }
};
