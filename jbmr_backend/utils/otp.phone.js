const axios = require('axios');
require('dotenv').config();

async function sendOTP(contactNumber, otp) {
  try {
    
    const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', {
      route: 'otp',
      variables_values: otp,
      numbers: contactNumber,
    }, {
      headers: {
        'authorization': process.env.authorization,
        'Content-Type': 'application/json'
      }
    });

    

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error sending OTP:', error.response.data);
    return { success: false, error: error.response.data };
  }
}

// Export the function as otpPhoneSender
exports.otpPhoneSender = sendOTP;