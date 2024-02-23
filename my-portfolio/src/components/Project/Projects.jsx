// Projects.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

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
import Project from "./Project";
import "./Projects.css";

const projectsData = [
    {
        id: 1,
        icon: "🧑‍🎓",
        title: "College Mate",
        role: "Frontend Developer",
        description:
            "I forged the front-end of College Mate, a University of Wisconsin–Madison app fostering student connections. Building with React, React Native, RESTful APIs, TypeScript, and HTML/CSS, I crafted user-friendly interfaces and engaging features. My focus on responsiveness ensured College Mate shines on any device, while pre-rendered wrapper pages slashed initial load times by 40% – all to get users interacting in a blink.",
        imageUrls: [
            "./CollegeMate1.png?as=webp",
            "./CollegeMate2.png?as=webp",
            "./CollegeMate3.png?as=webp",
        ],
        demoLink: "https://collegemate.app/",
    },
    {
        id: 2,
        icon: "🗺️",
        title: "Wisconsin SCO",
        role: "Backend Developer",
        description:
            "My key strengths lie in simplifying complex data and user interactions. I transformed a reliance on township expertise into a 50% more accessible map interface, and untangled 2,136 XML files with Python, building an export powerhouse that converts survey notes into any format, from CSV to JSON, empowering faster workflows and informed decisions. \n*Unfortunately, a demo cannot be provided due to company privacy restrictions.",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],
    },
    {
        id: 3,
        icon: "👨‍🚀",
        title: "Portfolio",
        role: "Web Developer",
        description:
            "👩‍💻🚀 Dive into a vibrant tapestry of my skills and projects, showcased in this comprehensive portfolio. From weaving responsive and interactive designs with JSX, React, and Node.js to transforming intricate data into user-friendly tapestries, I leverage modern tools like MUI to breathe life into your vision. Unfurl the scroll to unveil the breadth of my expertise across web development and creative design – click to see my work in action! #Portfolio #WebDev #Design",
        imageUrls: [
            "./portfolio1.png?as=webp",
            "./portfolio2.png?as=webp",
            "./portfolio3.png?as=webp",
            "./portfolio4.png?as=webp",
        ],
        demoLink: "https://github.com/Keemeeone/Portfolio/tree/main",
    },
];

/**
 * Functional component representing a project display.
 */
const Projects = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const [selectedTab, setSelectedTab] = useState(projectsData[0]);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={isSmallScreen ? 10 : 5} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    PROJECTS
                </Typography>
                <Box className="window tabs">
                    <nav className="nav">
                        <ul className="ul">
                            {projectsData.map((item) => (
                                <Box className={`lis ${item === selectedTab ? "selected" : ""}`} key={item.id}>
                                    <li onClick={() => setSelectedTab(item)}>
                                        {`${item.icon} ${item.title}`}
                                        {item === selectedTab ? (
                                            <motion.div className="underline" layoutId="underline" />
                                        ) : null}
                                    </li>
                                </Box>
                            ))}
                        </ul>
                    </nav>
                    <Box>
                        <AnimatePresence mode="wait">
                            <Project selectedTab={selectedTab} projectsData={projectsData} />
                        </AnimatePresence>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Projects;