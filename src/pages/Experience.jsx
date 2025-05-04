import React, { useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';
import { motion } from 'framer-motion';

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

  const top = experiences.slice(0, 1);
  const right = experiences.slice(1, 2);
  const bottom = experiences.slice(2, 3);
  const left = experiences.slice(3);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const renderList = (items, align = 'center') => (
    <List dense>
      {items.map((exp, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <ListItem sx={{ justifyContent: align, py: 0.5 }}>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textAlign: align,
                  }}
                >
                  {exp.title}
                  {exp.organization ? ' - ' + exp.organization : ''}
                </Typography>
              }
              secondary={exp.year}
              sx={{ textAlign: align }}
            />
          </ListItem>
        </motion.div>
      ))}
    </List>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#2b6777', textAlign: 'center' }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gridTemplateRows: 'auto auto auto',
          gap: 0.5,
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {/* Top */}
        <Box gridColumn="1 / span 3" gridRow="1">
          {renderList(top, 'center')}
        </Box>

        {/* Left */}
        <Box gridColumn="1" gridRow="2">
          {renderList(left, 'right')}
        </Box>

        {/* Center Image */}
        <Box gridColumn="2" gridRow="2" sx={{ p: 1 }}>
          <Box
            component="img"
            src="/experience.jpeg"
            alt="Experience"
            sx={{
              width: '95%',
              height: 'auto',
              maxHeight: '700px',
              borderRadius: 3,
              boxShadow: 4,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 10px 18px rgba(0,0,0,0.3)',
              },
            }}
          />
        </Box>

        {/* Right */}
        <Box gridColumn="3" gridRow="2">
          {renderList(right, 'left')}
        </Box>

        {/* Bottom */}
        <Box gridColumn="1 / span 3" gridRow="3">
          {renderList(bottom, 'center')}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
