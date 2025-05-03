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
        bgcolor: '#f5f5f5',
        p: 2,
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="body2">&copy; 2025 Your Name. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
