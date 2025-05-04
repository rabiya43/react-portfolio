import React, { useEffect, useContext } from 'react';
import {
  Typography,
  Box,
  LinearProgress,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PageTitleContext } from '../context/PageTitleContext';

const skills = [
  { name: 'C++/C#', level: 90, img: 'Cpp.jpeg' },
  { name: 'Python', level: 85, img: 'python.jpeg' },
  { name: 'Game Development', level: 90, img: 'game.jpeg' },
  { name: 'Software Development', level: 50, img: 'software.jpeg' },
  { name: 'Project Management', level: 80, img: 'project.png' },
  { name: 'Canva, Excel, Word', level: 95, img: 'microsoft.jpeg' },
];

const Skills = () => {
  const { setTitle } = useContext(PageTitleContext);

  useEffect(() => {
    setTitle('Skills');
  }, [setTitle]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#2b6777', fontFamily: '"Segoe UI", sans-serif' }}
      >
        Skills
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper elevation={4} sx={{ p: 2, textAlign: 'center' }}>
                <Box
                  component="img"
                  src={`/${skill.img}`}
                  alt={skill.name}
                  sx={{
                    width: '220px',
                    height: '150px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: 3,
                    mb: 1,
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    },
                  }}
                />
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{ height: 15, borderRadius: 5 }}
                />
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
