import React, { useContext, useEffect } from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PageTitleContext } from '../context/PageTitleContext';
// import axios from 'axios'; // Uncomment when using backend

const educationData = [
  {
    title: "Bachelor in Artificial Intelligence",
    institution: "ITU",
    duration: "2023 - 2027",
    image: "AI.jpeg"
  },
  {
    title: "I.Cs Physics",
    institution: "Kinnaird College",
    duration: "2021 - 2023",
    image: "Physics.jpeg"
  }
];

function Education() {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Education');

    // axios.get(`${process.env.REACT_APP_API_URL}/api/education`)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
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
        {educationData.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {edu.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {edu.institution} ({edu.duration})
                </Typography>
                <Box
                  component="img"
                  src={`/${edu.image}`}
                  alt={edu.title}
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Education;
