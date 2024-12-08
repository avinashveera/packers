import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Fab, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png';  // Custom Logo component
import { useNavigate } from 'react-router-dom';  // For navigation
import theme from '../theme';  // Import custom theme
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const TopAppBar = () => {
  const [open, setOpen] = useState(false);  // Drawer state for menu
  const navigate = useNavigate();  // For navigation

  const isMobile = useMediaQuery('(max-width:600px)');  // Check if screen size is mobile

  // Toggle the drawer (menu)
  const toggleDrawer = () => setOpen(!open);

  // Handle navigation when clicking on a menu item
  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);  // Close the menu when a menu item is clicked
  };

  const menuItems = [
    { text: 'Home', path: '/home' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          {/* Left side: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </Box>

          {/* Right side: Menu icon for mobile or Menu items for desktop */}
          {isMobile ? (
            <IconButton sx={{ color: theme.colors.secondary }} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  sx={{ color: theme.colors.secondary, marginLeft: 2 }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer (side menu) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.colors.background,
            boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRight: 'none',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* Logo and Company Name */}
        <Box sx={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginBottom: '30px',
        }}>
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
         
        </Box>

        {/* Menu Items (Centered with 3D effect) */}
        <List sx={{ display: 'table', width: '100%'}}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                display: 'table-row',
                borderBottom: '1px solid #ddd',
                margin: '10px 0',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: theme.colors.secondary,
                  color:'#fff',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                
                }
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{ color: theme.colors.primary, textAlign: 'center', fontWeight: 'bold',padding:"2px" }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Telegram Button */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 60,
          right: 16,
          bgcolor: "#00a2e7", // Primary color
          color: "#FFFFFF",
        }}
        component="a"
        href="https://t.me/jobscraping"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChatIcon />
      </Fab>

      {/* WhatsApp Button */}
      <Fab
        sx={{
          position: "fixed",
          bottom: 120,
          right: 16,
          bgcolor: "#25D366", // WhatsApp green
          color: "#FFFFFF",
        }}
        component="a"
        href="https://whatsapp.com/channel/0029VaxAC8LDp2QHBv5MD53T"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
};

export default TopAppBar;
