# EmailJS Setup Guide for MaansSpices Website

This guide will help you set up EmailJS to send emails from your Contact and Quote Request forms to `spices@maansindustries.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your Public Key

1. After logging in, go to **Account** → **General**
2. Scroll down to **API Keys** section
3. Copy your **Public Key** (starts with `user_...`)

## Step 3: Add Email Service (GoDaddy SMTP)

1. Go to **Email Services** → **Add New Service**
2. Choose **Custom SMTP**
3. Fill in your GoDaddy email settings:
   - **Service Name**: `GoDaddy Email` (or any name you prefer)
   - **SMTP Server**: 
     - For GoDaddy Workspace Email: `smtpout.secureserver.net`
     - For Office 365 (if using GoDaddy Office 365): `smtp.office365.com`
     - Check your GoDaddy email settings if unsure
   - **SMTP Port**: 
     - `587` (for TLS)
     - `465` (for SSL)
   - **Secure Connection**: 
     - `TLS` (for port 587)
     - `SSL` (for port 465)
   - **Username**: `spices@maansindustries.com`
   - **Password**: Your GoDaddy email password
4. Click **Save**
5. **Note your Service ID** (you'll need this later)

## Step 4: Use the Default Contact Template

1. Go to **Email Templates**
2. You should see a default template called **"contactus"** (or similar)
3. Click on it to edit
4. Configure it as follows:
   - **To Email**: `spices@maansindustries.com`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `{{subject}}`
   - **Content**:
     ```
     New Message from MaansSpices Website
     
     From: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     This email was sent from the MaansSpices website.
     ```
5. Click **Save**
6. **Note your Template ID** (it's usually `contactus` or you'll see it in the template settings)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (same folder as `package.json`)
2. Add the following variables with your actual values:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=contactus
```

**Important**: 
- Replace `your_public_key_here` with your actual Public Key from Step 2
- Replace `your_service_id_here` with your Service ID from Step 3
- Replace `contactus` with your actual Template ID from Step 4 (if different)

## Step 6: Test Your Setup

1. Restart your development server:
   ```bash
   npm start
   ```

2. Test the Contact Form:
   - Go to the Contact page
   - Fill out and submit the form
   - Check your `spices@maansindustries.com` inbox

3. Test the Quote Request:
   - Go to the Products page
   - Click "Request Quote" on any product
   - Fill out and submit the form
   - Check your `spices@maansindustries.com` inbox

## Troubleshooting

### Emails not sending?

1. **Check your SMTP settings**: Make sure your GoDaddy SMTP server, port, and credentials are correct
2. **Check your template variables**: Ensure the variable names in your templates match exactly (case-sensitive)
3. **Check browser console**: Open browser DevTools (F12) and check for any error messages
4. **Verify environment variables**: Make sure your `.env` file is in the root directory and variables start with `REACT_APP_`
5. **Restart server**: After creating `.env` file, restart your development server

### Still having issues?

- Check EmailJS dashboard for error logs
- Verify your GoDaddy email account is active and password is correct
- Contact EmailJS support if needed

## Security Note

- Never commit your `.env` file to GitHub
- The `.env` file should already be in `.gitignore`
- For production deployment, add these environment variables to your hosting platform (GitHub Pages, Vercel, Netlify, etc.)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- SMTP support

If you need more, consider upgrading to a paid plan.

