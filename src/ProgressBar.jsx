import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ label, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <Box ref={ref} sx={{ mb: 2 }}>
      <Typography
        variant="body2"
        sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left' }}
      >
        {label}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={inView ? value : 0}
        sx={{
          height: 12,
          borderRadius: 6,
          transition: 'all 1s ease-in-out',
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#2b6777',
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
