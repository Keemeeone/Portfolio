// Projects.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React, { useState } from "react";
import {
    Typography, useTheme,
    useMediaQuery,
    responsiveFontSizes,
    Container,
    ThemeProvider,
    Box
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Project from "./Project"; // Importing the Project component
import data from "../../data/data"; // Importing the project data
import "./Projects.css"; // Importing CSS styles for Projects component

// Extracting project data from external data source
const projectsData = data.projectsData;

/**
 * Functional component representing a project display.
 * @returns {JSX.Element} - JSX element representing the Projects component.
 */
const Projects = () => {
    // Theme and media query hooks
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    // State for tracking the selected tab
    const [selectedTab, setSelectedTab] = useState(projectsData[0]);

    // Render the Projects component with project tabs and details
    return (
        <ThemeProvider theme={responsiveTheme}>
            {/* Container for projects section */}
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Title for projects section */}
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={isSmallScreen ? 10 : 5} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    PROJECTS
                </Typography>
                {/* Container for project tabs */}
                <Box className="window tabs">
                    {/* Navigation for project tabs */}
                    <nav className="nav">
                        <ul className="ul">
                            {/* Mapping through project data to render tabs */}
                            {projectsData.map((item) => (
                                <Box className={`lis ${item === selectedTab ? "selected" : ""}`} key={item.id}>
                                    <li onClick={() => setSelectedTab(item)}>
                                        {`${item.icon} ${item.title}`}
                                        {/* Conditional rendering of underline animation */}
                                        {item === selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null}
                                    </li>
                                </Box>
                            ))}
                        </ul>
                    </nav>
                    {/* Box for project details */}
                    <Box>
                        {/* AnimatePresence for project switching animation */}
                        <AnimatePresence mode="wait">
                            {/* Render the Project component */}
                            <Project selectedTab={selectedTab} projectsData={projectsData} />
                        </AnimatePresence>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Projects;
