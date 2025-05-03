// src/pages/About.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

function About() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        I am Rabiya Tahir, currently pursuing a Bachelor's degree in Artificial Intelligence at ITU, Lahore.
        Passionate about Software Development and Game Creation.
      </Typography>
    </Box>
  );
}

export default About;
