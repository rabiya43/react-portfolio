import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" sx={{ zIndex: 1300 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          My Portfolio
        </Typography>
        <div>
          <IconButton onClick={handleClick}>
            <Avatar sx={{ bgcolor: deepPurple[500] }} src="/assests/images/profile.jpg" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Logout (placeholder)</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
