import React, { useContext, useEffect } from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';
import { motion } from 'framer-motion';
// import axios from 'axios'; // Uncomment when using backend

const projects = [
  {
    title: "Fayda Run",
    description: "Game Development Project",
    type: "video",
    media: "Fayda-Run.mp4"
  },
  {
    title: "Emoji Detector",
    description: "Software Project (In Process)",
    type: "image",
    media: "Emoji-Detector.jpg"
  }
];

function Projects() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Projects');

    // axios.get(`${process.env.REACT_APP_API_URL}/api/projects`)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
  }, [setTitle]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box p={3}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2b6777',
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box
                  component={project.type === "video" ? "video" : "img"}
                  src={`/${project.media}`}
                  alt={project.title}
                  autoPlay={project.type === "video"}
                  loop={project.type === "video"}
                  controls={project.type === "video"}
                  muted={project.type === "video"}
                  sx={{
                    width: '100%',
                    maxWidth: project.type === "video" ? "250px" : "450px",
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
