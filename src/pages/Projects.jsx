import React, { useContext, useEffect } from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';

function Projects() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#2b6777', fontFamily: '"Segoe UI", sans-serif' }}
      >
        Projects
      </Typography>

      <Grid container spacing={4}>
        {/* Fayda Run */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1, fontFamily: '"Segoe UI", sans-serif' }}
            >
              Fayda Run
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Game Development Project
            </Typography>
            <Box
              component="video"
              src="/Fayda-Run.mp4"
              autoPlay
              loop
              controls
              muted={false}
              sx={{
                width: '100%',
                maxWidth: '250px',
                borderRadius: 2,
                boxShadow: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                },
              }}
            />
          </Paper>
        </Grid>

        {/* Emoji Detector */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1, fontFamily: '"Segoe UI", sans-serif' }}
            >
              Emoji Detector
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Software Project (In Process)
            </Typography>
            <Box
              component="img"
              src="/Emoji-Detector.jpg"
              alt="Emoji Detector"
              sx={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
