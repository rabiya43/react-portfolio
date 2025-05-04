import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        bgcolor: 'secondary.main',
        color: 'text.primary',
        p: 2,
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="body2">
        &copy; 2025 Rabiya Tahir. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
