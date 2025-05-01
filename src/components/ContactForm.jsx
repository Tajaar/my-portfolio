// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        e.target, 
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log('Message sent: ', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error: ', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <span className="heading">Contact Me</span>
      <form onSubmit={handleSubmit} className="form-grid">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

