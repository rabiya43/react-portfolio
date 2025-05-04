import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ label, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box ref={ref} sx={{ mb: 2 }}>
      <Typography variant="body1">{label}</Typography>
      {inView && (
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ height: 10, borderRadius: 5 }}
        />
      )}
    </Box>
  );
};

export default ProgressBar;
