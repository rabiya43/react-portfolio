// src/pages/Home.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        Explore my journey in software development, game creation, and academic achievements!
      </Typography>
    </Box>
  );
}

export default Home;
