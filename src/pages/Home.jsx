import React, { useContext, useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Avatar,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PageTitleContext } from '../context/PageTitleContext';
import { motion } from 'framer-motion'; // Import motion for animation

function Home() {
  const { setTitle } = useContext(PageTitleContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box p={3} sx={{ position: 'relative', fontFamily: '"Segoe UI", sans-serif' }}>
      {/* Top-right image with hover and click */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInVariant}
      >
        <Avatar
          alt="My Profile"
          src="/profile.jpg"
          onClick={handleOpen}
          sx={{
            width: 190,
            height: 190,
            position: 'absolute',
            top: 40,
            right: 20,
            border: '4px solid #2b6777',
            boxShadow: 4,
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.08)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            },
          }}
        />
      </motion.div>

      {/* Enlarged image dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ position: 'relative', p: 2 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#333',
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src="/profile.jpg"
            alt="My Profile Large"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '10px',
              marginTop: '20px',
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Main content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeInVariant}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mt: 2,
            fontWeight: 'bold',
            color: '#2b6777',
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          RABIYA TAHIR
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeInVariant}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: '#144552',
            fontWeight: 500,
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          Artificial Intelligence Student | Software & Game Developer
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={fadeInVariant}
      >
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontSize: '1.05rem',
            lineHeight: 1.8,
            fontFamily: '"Segoe UI", sans-serif',
          }}
        >
          <strong>About Me</strong><br />
          An undergraduate student at Information Technology University (ITU), Lahore,
          pursuing a Bachelor’s degree in Artificial Intelligence (BSAI).<br /><br />
          Additionally, I am currently a <strong>Teaching Assistant of DBMS</strong>, skilled in <strong>Game Development</strong>, <strong>Web Development</strong>, and <strong>Software Engineering</strong>. I am also a <strong>Freelancer</strong>, always eager to learn and grow in new areas of technology.
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Home;
