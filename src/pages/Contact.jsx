// src/pages/Contact.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_04bt4bn';
const TEMPLATE_ID = 'template_3dv8y7k';
const PUBLIC_KEY = 'DJg8cPiT1d4z4u2qu';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Contact = () => {
  const { setTitle } = useContext(PageTitleContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill in all fields!');
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setError('');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box sx={{ maxWidth: 500, mx: 'auto', mt: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" gutterBottom>Contact Me</Typography>
        </motion.div>

        {submitted && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert severity="success" sx={{ mb: 2 }}>
              Form submitted successfully!
            </Alert>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <TextField
              fullWidth margin="normal" label="Name"
              name="name" value={formData.name} onChange={handleChange}
            />
          </motion.div>
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <TextField
              fullWidth margin="normal" label="Email"
              name="email" value={formData.email} onChange={handleChange}
            />
          </motion.div>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <TextField
              fullWidth margin="normal" label="Message" multiline rows={4}
              name="message" value={formData.message} onChange={handleChange}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-block' }}
          >
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>Submit</Button>
          </motion.div>
        </form>
      </Box>
    </motion.div>
  );
};

export default Contact;
