// mailSender.js

const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to send an email
const sendMail = async (to, subject, text, htmlContent) => {
  try {
    // Create a Nodemailer transporter using Gmail as the service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., user@gmail.com)
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
      }
    });

    // Create the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
      html: htmlContent
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Email sent successfully to ${to}`);
    return true; // Indicate successful sending
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email send failed');
  }
};

module.exports = sendMail;
