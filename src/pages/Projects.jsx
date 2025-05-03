// src/pages/Projects.jsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Projects() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fayda Run" secondary="Game Development Project" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Emoji Detector" secondary="Software Project (In Process)" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Projects;
