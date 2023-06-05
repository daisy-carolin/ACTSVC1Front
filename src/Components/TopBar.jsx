import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
       localStorage.removeItem('login');
       navigate('/login')
      };

  return (
    <AppBar position="static" sx={{background: "#27374D"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Web
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/content" color="inherit">Content</Button>
        <Button onClick={handleLogout} color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
