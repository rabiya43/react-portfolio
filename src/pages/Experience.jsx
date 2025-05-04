import React, { useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';

const experiences = [
  { title: 'Event Management Head', organization: 'KBW', year: '2022' },
  { title: 'VP of Event Management Society', organization: 'ITU', year: '2024' },
  { title: 'Decor Head', organization: 'GDG ITU', year: '2025' },
  { title: 'Teacher Assistant', organization: 'Database (Course)', year: '' },
  { title: 'Part-time Freelancer', organization: 'Multiple Clients', year: '2023–Present' },
];

const Experience = () => {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Experience');
  }, [setTitle]);

  // Split into two columns
  const mid = Math.ceil(experiences.length / 2);
  const leftColumn = experiences.slice(0, mid);
  const rightColumn = experiences.slice(mid);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2b6777' }}>
        Experience
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Left Experience List */}
        <Grid item xs={12} md={4}>
          <List>
            {leftColumn.map((exp, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                <ListItemText
                  primary={`${exp.title} ${exp.organization ? '- ' + exp.organization : ''}`}
                  secondary={exp.year}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Centered Image */}
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/experience.jpeg" // Change this to your actual image file if needed
            alt="Experience"
            sx={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: 6,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 12px 20px rgba(0,0,0,0.4)',
              },
            }}
          />
        </Grid>

        {/* Right Experience List */}
        <Grid item xs={12} md={4}>
          <List>
            {rightColumn.map((exp, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                <ListItemText
                  primary={`${exp.title} ${exp.organization ? '- ' + exp.organization : ''}`}
                  secondary={exp.year}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
