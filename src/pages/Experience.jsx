// src/pages/Experience.jsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Experience() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Event Management Head - KBW 2022" />
        </ListItem>
        <ListItem>
          <ListItemText primary="VP of Event Management Society (ITU) - 2024" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Decor Head - GDG ITU (2025)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Teacher Assistant (Database)" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
