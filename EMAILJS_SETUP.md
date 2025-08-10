# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to send contact form messages from your portfolio to your email address: `ayazm9582@gmail.com`

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name (e.g., "Gmail")
6. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Choose a template type (HTML or Text)
4. Set up your template with these variables:

### Template Variables
Use these variables in your email template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Your email (ayazm9582@gmail.com)

### Example Template
```
Subject: New Portfolio Contact: {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here'
};
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (ayazm9582@gmail.com) for the message

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Make sure you've added an email service in EmailJS
   - Verify the Service ID is correct

2. **"Template not found" error**
   - Make sure you've created an email template
   - Verify the Template ID is correct

3. **"Public key not found" error**
   - Make sure you've copied the correct Public Key
   - Verify the key is active in your EmailJS account

4. **Emails not being received**
   - Check your spam folder
   - Verify your email service is properly connected
   - Check the EmailJS dashboard for any error logs

### Free Plan Limits:

- EmailJS free plan allows 200 emails per month
- If you need more, consider upgrading to a paid plan

## Security Notes

- The Public Key is safe to expose in your frontend code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your frontend code

## Support

If you encounter issues:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Check the EmailJS dashboard for error logs
3. Contact EmailJS support if needed

---

Once configured, your contact form will send real emails to `ayazm9582@gmail.com` whenever someone submits the form on your portfolio!
