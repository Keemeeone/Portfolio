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
import Project from "../Project/Project";
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
    { label: 'Home', component: Home },
    { label: 'Skills', component: Skill },
    { label: 'Projects', component: Project },
    { label: 'Resume', component: Resume },
    { label: 'Contact', component: Contact },
  ];

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar color="transparent" elevation={0} sx={{ backgroundColor: 'transparent', minHeight:'0', maxHeight:'100%', height:'4rem' }}>
      <Toolbar>
        <Typography variant="h5" fontWeight={"bold"} sx={{ flexGrow: 1, textDecoration: 'none', color: '#FFF', userSelect: 'none' }}>
          HEEWON's
        </Typography>
        {/* Menu Button for Small Devices */}
        <IconButton color='#FFF' onClick={openMenu} sx={{ display: { sm: 'block', md: 'none' } }}>
          <MenuIcon sx={{ color: '#FFF' }} />
        </IconButton>
        {/* Navigation Buttons */}
        {navigationButtons.map(({label}, idx) => (
          <React.Fragment key={idx}>
            <Button onClick={() => clickHandler(idx)} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }, color:'#FFF', fontWeight:'bold' }}>
              {label}
            </Button>
          </React.Fragment>
        ))}
        {/* Responsive Menu */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu}
          sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
        >
          {navigationButtons.map(({ label }, idx) => (
            <MenuItem key={idx} onClick={() => { clickHandler(idx); closeMenu(); }}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
