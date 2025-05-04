// src/pages/About.jsx
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box p={3}>
      {/* Animated Title */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 10,
          duration: 1,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2b6777',
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4} alignItems="center">
        {/* Text Animation */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: '1.1rem', fontFamily: '"Segoe UI", sans-serif' }}
            >
              I am <strong>Rabiya Tahir</strong>, currently pursuing a Bachelor's degree in Artificial Intelligence at <strong>ITU, Lahore</strong>.
              I am passionate about <strong>Software Development</strong> and <strong>Game Creation</strong>. I love crafting digital experiences that are
              innovative, immersive, and purposeful.
            </Typography>
          </motion.div>
        </Grid>

        {/* Profile Image with Flip + Hover Tilt Glow */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: 'easeOut',
            }}
            whileHover={{
              rotate: [0, 1, -1, 1, 0],
              boxShadow: '0 0 20px #2b6777',
              transition: { duration: 0.6, repeat: Infinity, repeatType: 'loop' },
            }}
          >
            <Box
              component="img"
              src="/profile.jpeg" // Replace with your actual image
              alt="Rabiya Tahir"
              sx={{
                width: '100%',
                maxWidth: '250px',
                borderRadius: 2,
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
