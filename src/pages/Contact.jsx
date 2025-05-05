import React, { useEffect, useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_04bt4bn';
const TEMPLATE_ID = 'template_3dv8y7k';
const PUBLIC_KEY = 'DJg8cPiT1d4z4u2qu';

const Contact = () => {
  const { setTitle } = useContext(PageTitleContext);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      setSubmitted(true);
      resetForm();
      setError('');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 10 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center' }}
      >
        Contact Me
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Form submitted successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                label="Message"
                name="message"
                multiline
                rows={4}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 2 }}
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
              >
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
