import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Skill from "./Skill";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";


const Header = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h5" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          PORTFOLIO
        </Typography>
        <Button component={Link} to={Project} color="inherit">
          Projects
        </Button>
        <Button component={Link} to={Resume} color="inherit">
          Resume
        </Button>
        <Button component={Link} to={Skill} color="inherit">
          Skills
        </Button>
        <Button component={Link} to={Contact}color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
