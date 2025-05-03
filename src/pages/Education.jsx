// src/pages/Education.jsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Education() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Bachelor in Artificial Intelligence" secondary="ITU (2023 - 2027)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="I.Cs Physics" secondary="Kinnaird College (2021 - 2023)" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Education;
