// Header.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Home from "../Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume";
import Project from "../Project";
import Contact from "../Contact";
import HeaderSlide from './HeaderSlide';

/**
 * Header component for the application.
 * @param {Object} props - Props for the Header component.
 * @param {number} props.currIdx - Current index for navigation.
 * @param {Function} props.clickHandler - Click handler for navigation.
 */
const Header = ({ currIdx, clickHandler }) => {
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
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography variant="h5" fontWeight={"bold"} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', userSelect: 'none' }}>
          HEEWON's
        </Typography>
        {/* Menu Button for Small Devices */}
        <IconButton color="inherit" onClick={openMenu} sx={{ display: { sm: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        {/* Navigation Buttons */}
        {navigationButtons.map(({ label, component: Component }, idx) => (
          <React.Fragment key={idx}>
            <Button color="inherit" onClick={() => clickHandler(idx)} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
              {label}
            </Button>
            <HeaderSlide
              isCurrent={currIdx === idx}
              thisIdx={idx}
              clickHandler={() => clickHandler(idx)}
            />
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
