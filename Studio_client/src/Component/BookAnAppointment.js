import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BookAnAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can use formData to access the form fields
    // For example: console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="php-email-form p-3 p-md-4">
      <div className="row">
        <Form.Group className="col-xl-6" controlId="name">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-xl-6" controlId="email">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      <Form.Group controlId="subject">
        <Form.Control
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Control
          as="textarea"
          name="message"
          rows={5}
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center btn-danger" >
        <Button type="submit">Send Message</Button>
      </div>
    </Form>
  );
};

export default BookAnAppointment;
