import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material';
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
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: 'fixed', top: 70, left: 10, zIndex: 1300 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            <List sx={{ width: 200 }}>
              {navItems.map(({ text, path }) => (
                <ListItem button key={text} component={Link} to={path} onClick={toggleDrawer}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Drawer variant="permanent" sx={{ width: 200, [`& .MuiDrawer-paper`]: { width: 200, top: 64 } }}>
          <List>
            {navItems.map(({ text, path }) => (
              <ListItem button key={text} component={Link} to={path}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default SideNav;
