// send-email.js (inside the 'functions' directory)
exports.handler = async function (event, context) {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {

    // EmailJS API configuration
    const emailJsUserId = 'taGd6VV8u3qghQ1WT'; // Replace with your EmailJS user ID
    const serviceID = 'service_khq2se4'; // Replace with your EmailJS service ID
    const templateID = 'template_d057z2r'; // Replace with your EmailJS template ID

    // Compose the email message
    const credentials = {
      emailJsUserId,
      serviceID,
      templateID
    };

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email credentials sent successfully.', data: credentials }),
    };
  } catch (error) {
    console.error('Error retrieving email credentials. ' + error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
