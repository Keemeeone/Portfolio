// Header.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Home from "../Home/Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";

/**
 * Header component for the application.
 * @param {Object} props - Props for the Header component.
 * @param {number} props.currIdx - Current index for navigation.
 * @param {Function} props.clickHandler - Click handler for navigation.
 */
const Header = ({ clickHandler }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const navigationButtons = [
    { id: 0, label: 'Home', component: Home },
    { id: 2, label: 'Skills', component: Skill },
    { id: 4, label: 'Projects', component: Projects },
    { id: 5, label: 'Resume', component: Resume },
    { id: 6, label: 'Contact', component: Contact },
  ];

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar color="transparent" elevation={0} sx={{ backgroundColor: 'transparent', minHeight: '0', maxHeight: '100%', height: '4rem' }}>
      <Toolbar>
        <Typography variant="h5" fontWeight={"bold"} sx={{ flexGrow: 1, textDecoration: 'none', color: '#FFF', userSelect: 'none' }}>
          HEEWON's
        </Typography>
        {/* Menu Button for Small Devices */}
        <IconButton color='#FFF' onClick={openMenu} sx={{ display: { sm: 'block', md: 'none' } }}>
          <MenuIcon sx={{ color: '#FFF' }} />
        </IconButton>
        {/* Navigation Buttons */}
        {navigationButtons.map(({ id, label }, idx) => (
          <React.Fragment key={idx}>
            <Button
              onClick={() => clickHandler(id)}
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
                color: '#FFF',
                fontWeight: 'bold',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'color 0.3s ease, transform 0.3s ease',

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  borderRadius: '30%',
                  width: '100%',
                  height: '2px',
                  background: '#fff',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                },

                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&::after': {
                    transform: 'scaleX(1)',
                  },
                },
              }}
            >
              {label}
            </Button>
          </React.Fragment>
        ))}
        {/* Responsive Menu */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu}
          PaperProps={{
            sx: {
              width: '100%',
              backgroundColor: 'rgba(40, 99, 70, 0.98)',
              color: '#FFF',
              marginTop: '1rem'
            },
          }}
          sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, backgroundColor: '', width: '100%', }}
        >
           {navigationButtons.map(({ id, label }, idx) => (
            <MenuItem key={idx} onClick={() => { clickHandler(id); closeMenu(); }} sx={{ justifyContent: 'center' }}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
