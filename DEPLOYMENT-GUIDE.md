# 🚀 Complete Deployment Guide: React + Google Apps Script Integration

## Overview
This guide will help you deploy your Digital Marketing Agency React app with a fully functional contact form that saves leads to Google Sheets and sends email notifications.

## 📋 Prerequisites
- Google Account (Gmail)
- React app deployed (Lovable handles this automatically)
- Basic understanding of Google Sheets and Apps Script

---

## 🔧 Part 1: Google Apps Script Setup

### Step 1: Create a New Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Rename it to **"LeadGen Pro - Contact Form Submissions"**
4. **IMPORTANT**: Copy the Sheet ID from the URL
   ```
   https://docs.google.com/spreadsheets/d/[COPY_THIS_PART]/edit
   ```
   Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Step 2: Create Google Apps Script Project
1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Rename the project to **"LeadGen Pro Contact Form Handler"**
4. Delete the default `function myFunction()` code
5. Copy and paste the entire contents of `Google-Apps-Script.js` into the editor

### Step 3: Configure the Script
Update these values in the `CONFIG` object:

```javascript
const CONFIG = {
  // Replace with your Sheet ID from Step 1
  SHEET_ID: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
  
  // Replace with your email for notifications
  NOTIFICATION_EMAIL: 'your-email@gmail.com',
  
  // Add your domain(s)
  ALLOWED_ORIGINS: [
    'https://your-lovable-app.lovable.app',
    'https://your-custom-domain.com',
    'http://localhost:3000',
    'http://localhost:8080'
  ]
};
```

### Step 4: Set Permissions
1. Click **"Save"** (Ctrl+S)
2. Click **"Run"** to test the script
3. **IMPORTANT**: Grant all requested permissions:
   - ✅ View and manage spreadsheets
   - ✅ Send emails as you
   - ✅ Connect to external services

### Step 5: Test Your Setup
1. In the Apps Script editor, select `testSetup` from the function dropdown
2. Click **"Run"**
3. Check the logs (View → Logs) for success messages
4. Verify a test row appears in your Google Sheet
5. Check your email for a test notification

### Step 6: Deploy as Web App
1. Click **"Deploy"** → **"New Deployment"**
2. Click the gear icon ⚙️ next to **"Type"**
3. Select **"Web app"**
4. Configure settings:
   ```
   Description: LeadGen Pro Contact Form API
   Execute as: Me (your-email@gmail.com)
   Who has access: Anyone
   ```
5. Click **"Deploy"**
6. **IMPORTANT**: Copy the Web App URL
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

---

## ⚛️ Part 2: React App Configuration

### Step 1: Update Contact Form Component
In `src/components/ContactForm.tsx`, replace the placeholder URL:

```typescript
// Replace this line:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// With your actual URL:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx...your-actual-script-id.../exec';
```

### Step 2: Update Site Information
Update these files with your actual business information:

**`src/components/Layout.tsx`** - Update company name and contact info
**`src/pages/ContactPage.tsx`** - Update contact details
**`index.html`** - Update title and meta description

---

## 🧪 Part 3: Testing the Integration

### Test the Contact Form
1. Deploy your React app (Lovable does this automatically)
2. Navigate to the Contact page (`/contact`)
3. Fill out and submit the test form:
   ```
   Name: Test User
   Email: your-email@gmail.com
   Message: Testing the contact form integration
   ```
4. Verify the following:
   - ✅ Form shows success message
   - ✅ New row appears in Google Sheet
   - ✅ Email notification received
   - ✅ No console errors

### Troubleshooting Common Issues

**❌ CORS Errors**
```javascript
// In Apps Script, ensure ALLOWED_ORIGINS includes your domain
ALLOWED_ORIGINS: [
  'https://your-app.lovable.app',  // Add your actual Lovable URL
  'https://your-domain.com'        // Add custom domain if applicable
]
```

**❌ Permission Denied**
- Re-run the Apps Script authorization process
- Ensure the script has permissions to access Gmail and Sheets

**❌ Form Not Submitting**
- Check browser console for errors
- Verify the Google Apps Script URL is correct
- Test the Apps Script directly by visiting the URL

**❌ No Email Notifications**
- Check Gmail spam folder
- Verify `NOTIFICATION_EMAIL` is correct
- Test with the `testSetup()` function

---

## 🔒 Part 4: Security Considerations

### Data Privacy
- The form collects: Name, Email, Message, Timestamp
- Data is stored in your private Google Sheet
- Only you have access to the submissions

### Rate Limiting
- Consider adding rate limiting for production use
- Monitor the Apps Script execution quota

### SSL/HTTPS
- Always use HTTPS for form submissions
- Lovable provides HTTPS by default

---

## 📊 Part 5: Monitoring and Analytics

### Google Sheets Dashboard
Your sheet will automatically track:
- Submission timestamp
- Contact details
- Message content
- Source (website)
- Status (New/Contacted/Closed)

### Email Notifications
Each submission triggers a professional email with:
- Contact information
- Message content
- One-click reply button
- Submission timestamp

### Apps Script Monitoring
- View execution logs in Apps Script dashboard
- Monitor quota usage
- Set up error notifications

---

## 🎯 Part 6: Going Live

### Final Checklist
- [ ] Google Sheet created and Sheet ID copied
- [ ] Apps Script deployed with correct permissions
- [ ] Web App URL updated in React component
- [ ] Contact information updated throughout the app
- [ ] Form tested end-to-end
- [ ] Email notifications working
- [ ] SSL certificate active (Lovable handles this)

### Custom Domain Setup (Optional)
If using a custom domain:
1. Update `ALLOWED_ORIGINS` in Apps Script
2. Update any hardcoded URLs in React app
3. Test form submission with new domain

---

## 🆘 Support and Resources

### Google Apps Script Documentation
- [Apps Script Guide](https://developers.google.com/apps-script)
- [Gmail API Reference](https://developers.google.com/apps-script/reference/gmail)
- [Sheets API Reference](https://developers.google.com/apps-script/reference/spreadsheet)

### React/Lovable Resources
- [Lovable Documentation](https://docs.lovable.dev)
- [React Router Documentation](https://reactrouter.com)

### Need Help?
If you encounter issues:
1. Check the browser console for errors
2. Review Apps Script execution logs
3. Test each component individually
4. Verify all URLs and IDs are correct

---

## 🎉 Congratulations!

You now have a fully functional Digital Marketing Agency website with:
- ✅ Professional design with modern UI
- ✅ Responsive layout for all devices
- ✅ Contact form with validation
- ✅ Automatic lead capture to Google Sheets
- ✅ Email notifications for new leads
- ✅ SEO-friendly structure

Your lead generation system is ready to help grow your business! 🚀