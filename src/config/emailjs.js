// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get these credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  
  // Your EmailJS service ID (Gmail, Outlook, etc.)
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
  
  // Your EmailJS template ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your email service (Gmail, Outlook, etc.) in the Email Services section
// 3. Create an email template in the Email Templates section
// 4. Get your Public Key from the Account > API Keys section
// 5. Replace the placeholder values above with your actual credentials
// 6. Update the Contact.js component to import and use these values

// Email Template Variables you can use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_email}} - Your email address (ayazm9582@gmail.com)
