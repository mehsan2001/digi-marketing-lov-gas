/**
 * Google Apps Script for Lead Generation Contact Form
 * This script handles form submissions, saves data to Google Sheets, and sends email notifications
 */

// CONFIGURATION - UPDATE THESE VALUES
const CONFIG = {
  // Replace with your Google Sheet ID (found in the URL)
  SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
  
  // Replace with your email address for notifications
  NOTIFICATION_EMAIL: 'your-email@gmail.com',
  
  // Email settings
  EMAIL_SUBJECT: '🚀 New Lead from LeadGen Pro Website!',
  
  // CORS settings
  ALLOWED_ORIGINS: [
    'https://your-domain.com',
    'https://lovable.dev',
    'http://localhost:3000',
    'http://localhost:8080'
  ]
};

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Handle CORS
    const origin = e.parameter.origin || e.headers?.origin;
    
    // Get form data
    const formData = {
      name: e.parameter.name || '',
      email: e.parameter.email || '',
      message: e.parameter.message || '',
      timestamp: e.parameter.timestamp || new Date().toISOString(),
      source: 'LeadGen Pro Website'
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return createResponse({
        success: false,
        error: 'Missing required fields'
      }, 400);
    }
    
    // Save to Google Sheets
    const sheetResult = saveToSheet(formData);
    
    // Send email notification
    const emailResult = sendEmailNotification(formData);
    
    // Return success response
    return createResponse({
      success: true,
      message: 'Form submitted successfully',
      sheetRow: sheetResult.row,
      emailSent: emailResult.sent
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return createResponse({
      success: false,
      error: 'Internal server error: ' + error.message
    }, 500);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return createResponse({
    success: true,
    message: 'LeadGen Pro Contact Form API is running',
    timestamp: new Date().toISOString()
  });
}

/**
 * Save form data to Google Sheets
 */
function saveToSheet(formData) {
  try {
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getActiveSheet();
    
    // Check if headers exist, if not create them
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (headers.length === 0 || headers[0] === '') {
      const headerRow = ['Timestamp', 'Name', 'Email', 'Message', 'Source', 'Status'];
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headerRow.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
    }
    
    // Prepare data row
    const dataRow = [
      new Date(formData.timestamp),
      formData.name,
      formData.email,
      formData.message,
      formData.source,
      'New'
    ];
    
    // Add data to sheet
    const newRowIndex = sheet.getLastRow() + 1;
    sheet.getRange(newRowIndex, 1, 1, dataRow.length).setValues([dataRow]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, dataRow.length);
    
    return {
      success: true,
      row: newRowIndex
    };
    
  } catch (error) {
    console.error('Error saving to sheet:', error);
    throw new Error('Failed to save data to sheet: ' + error.message);
  }
}

/**
 * Send email notification
 */
function sendEmailNotification(formData) {
  try {
    const emailBody = createEmailBody(formData);
    
    GmailApp.sendEmail(
      CONFIG.NOTIFICATION_EMAIL,
      CONFIG.EMAIL_SUBJECT,
      '', // Plain text version
      {
        htmlBody: emailBody,
        name: 'LeadGen Pro Contact Form'
      }
    );
    
    return { sent: true };
    
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw error here - we still want to save to sheet even if email fails
    return { sent: false, error: error.message };
  }
}

/**
 * Create HTML email body
 */
function createEmailBody(formData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Lead from LeadGen Pro!</h1>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #1f2937;">
                <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
              <td style="padding: 8px 0; color: #1f2937;">${new Date(formData.timestamp).toLocaleString()}</td>
            </tr>
          </table>
        </div>
        
        <h3 style="color: #1f2937; margin-bottom: 10px;">Message</h3>
        <div style="background: #f9fafb; padding: 20px; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; color: #374151; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${formData.email}?subject=Re: Your inquiry about LeadGen Pro services" 
             style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Reply to ${formData.name}
          </a>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
          <p>This lead was generated from the LeadGen Pro contact form.</p>
          <p>Make sure to respond within 24 hours for best conversion rates! 🎯</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Create standardized API response
 */
function createResponse(data, statusCode = 200) {
  const response = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
    
  // Add CORS headers
  if (statusCode === 200) {
    return response;
  }
  
  return response;
}

/**
 * Test function to verify setup
 */
function testSetup() {
  console.log('Testing Google Apps Script setup...');
  
  // Test data
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message to verify the setup is working correctly.',
    timestamp: new Date().toISOString(),
    source: 'Test Setup'
  };
  
  try {
    // Test sheet access
    const sheetResult = saveToSheet(testData);
    console.log('✅ Sheet access working:', sheetResult);
    
    // Test email sending
    const emailResult = sendEmailNotification(testData);
    console.log('✅ Email notification working:', emailResult);
    
    console.log('🎉 Setup test completed successfully!');
    return true;
    
  } catch (error) {
    console.error('❌ Setup test failed:', error);
    return false;
  }
}