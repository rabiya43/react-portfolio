// src/pages/Contact.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';

const Contact = () => {
  const { setTitle } = useContext(PageTitleContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 10 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      {submitted && <Alert severity="success" sx={{ mb: 2 }}>Form submitted successfully!</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth margin="normal" label="Name"
          name="name" value={formData.name} onChange={handleChange}
        />
        <TextField
          fullWidth margin="normal" label="Email"
          name="email" value={formData.email} onChange={handleChange}
        />
        <TextField
          fullWidth margin="normal" label="Message" multiline rows={4}
          name="message" value={formData.message} onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Box>
  );
};

export default Contact;
