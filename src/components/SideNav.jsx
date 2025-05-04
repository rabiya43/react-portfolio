import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen(!open);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Skills', path: '/skills' },        
    { text: 'Experience', path: '/experience' },
    { text: 'Contact', path: '/contact' },
  ];
  
  const drawerContent = (
    <Box sx={{ width: 200 }}>
      <List>
        {navItems.map(({ text, path }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            onClick={() => isMobile && toggleDrawer()}
            sx={{ color: '#fff' }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: 'fixed', top: 70, left: 10, zIndex: 1300, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 200,
            [`& .MuiDrawer-paper`]: {
              width: 200,
              top: 64,
              bgcolor: 'primary.main',
              color: '#fff',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default SideNav;
