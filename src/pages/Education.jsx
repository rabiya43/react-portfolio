import React, { useContext, useEffect } from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';

function Education() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  return (
    <Box p={3}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#2b6777', fontFamily: '"Segoe UI", sans-serif' }}
      >
        Education
      </Typography>

      <Grid container spacing={4}>
        {/* Bachelor in AI */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1, fontFamily: '"Segoe UI", sans-serif' }}
            >
              Bachelor in Artificial Intelligence
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: '"Segoe UI", sans-serif', mb: 2 }}
            >
              ITU (2023 - 2027)
            </Typography>
            <Box
              component="img"
              src="/AI.jpeg"
              alt="AI"
              sx={{
                width: '100%',
                maxWidth: '250px',
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

        {/* I.Cs Physics */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1, fontFamily: '"Segoe UI", sans-serif' }}
            >
              I.Cs Physics
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: '"Segoe UI", sans-serif', mb: 2 }}
            >
              Kinnaird College (2021 - 2023)
            </Typography>
            <Box
              component="img"
              src="/Physics.jpeg"
              alt="Physics"
              sx={{
                width: '100%',
                maxWidth: '250px',
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

export default Education;
