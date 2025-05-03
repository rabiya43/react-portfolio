// src/pages/Skills.jsx
import React from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';

function Skills() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>

      <Typography variant="body1" gutterBottom>C++/C#</Typography>
      <LinearProgress variant="determinate" value={90} />

      <Typography variant="body1" gutterBottom mt={2}>Python</Typography>
      <LinearProgress variant="determinate" value={85} />

      <Typography variant="body1" gutterBottom mt={2}>Game Development</Typography>
      <LinearProgress variant="determinate" value={90} />

      <Typography variant="body1" gutterBottom mt={2}>Software Development</Typography>
      <LinearProgress variant="determinate" value={50} />

      <Typography variant="body1" gutterBottom mt={2}>Project Management</Typography>
      <LinearProgress variant="determinate" value={80} />

      <Typography variant="body1" gutterBottom mt={2}>Canva, Excel, Word</Typography>
      <LinearProgress variant="determinate" value={95} />
    </Box>
  );
}

export default Skills;
