import React from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const Contact = () => {
    const getEmailCredentials = async () => {
      try {
        const response = await axios.get('/.netlify/functions/get-email-credentials');
        if (response.status === 200) {
            return response.data.data;
        } else {
          console.error('Failed to get email credentials.');
        }
      } catch (error) {
        console.error('Error fetching email credentials:', error);
      }
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phone, message } = event.target;
    
    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    };
    
    try {
        const credentials = await getEmailCredentials();
      if (!credentials) {
        console.error('Email credentials not available. Cannot send email.');
        return;
      }

      emailjs.init(credentials.emailJsUserId);

      const response = await emailjs.send(credentials.serviceID, credentials.templateID, formData);

      if (response.text === 'OK') {
        alert('Email sent successfully');
        // Optionally, you can clear the form fields after successful submission
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

    return (
        <>
            <div className='page-background'/>
            <div className="page-overlay"/>
            <div className="page contact">
                <div className='page-section contact-section'>
                    <h1  className="page-heading">Contact Us</h1>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-section'>
                            <label htmlFor="firstName"><span className='required'>*</span> First Name: </label>
                            <input className='' name='firstName' id='firstName' required type="text" placeholder='Enter your first name.' />
                        </div>
                        <div className='form-section'>
                            <label htmlFor="lastName"><span className='required'>*</span> Last Name: </label>
                            <input className='' name='lastName' id='lastName' required type="text" placeholder='Enter your last name.' />
                        </div>
                        <div className='form-section'>
                            <label htmlFor="phone"><span className='required'>*</span> Phone: </label>
                            <input className='' name='phone' id='phone' required type="tel" placeholder='Enter your phone number.' />
                        </div>
                        <div className='form-section'>
                            <label htmlFor="email"><span className='required'>*</span> Email: </label>
                            <input className='' name='email' id='email' required type="email" placeholder='Enter your email.' />
                        </div>
                        <div className='form-section form-section-message'>
                            <label htmlFor="message"><span className='required'>*</span> Message: </label>
                            <textarea className='' name='message' id='message' required type="text" placeholder='Enter a brief message.' />
                        </div>
                        <button className='form-button' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;