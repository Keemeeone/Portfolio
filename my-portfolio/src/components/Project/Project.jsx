// Project.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
    responsiveFontSizes,
    ThemeProvider,
    Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const projectsData = [
    {
        id: 1,
        title: "College Mate App",
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
        title: "Wisconsin SCO",
        role: "Backend Developer",
        description:
            "My key strengths lie in simplifying complex data and user interactions. I transformed a reliance on township expertise into a 50% more accessible map interface, and untangled 2,136 XML files with Python, building an export powerhouse that converts survey notes into any format, from CSV to JSON, empowering faster workflows and informed decisions. \n*Unfortunately, a demo cannot be provided due to company privacy restrictions.",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],
    },
    {
        id: 3,
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
 * Project component displaying a carousel of project information, including title, role, description, images, and demo link.
 */
const Project = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={5} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    PROJECTS
                </Typography>
                <Carousel
                    autoPlay={true}
                    animation="slide"
                    timeout={600}
                    navButtonsAlwaysVisible
                    indicators={true}
                >
                    {projectsData.map((project) => (
                        <Box key={project.id} sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img
                                alt={project.title}
                                src={
                                    project.imageUrls[currentImageIndex] ||
                                    project.imageUrls[0]
                                }
                                style={{
                                    minHeight: "0",
                                    height: "100%",
                                    minWidth: "0",
                                    width: "100%",
                                    // maxHeight: "50vh",
                                    maxWidth: "80%",
                                    border: "1px solid #65f9af",
                                    borderRadius: "10px",
                                    position: "relative",
                                    opacity: isHovered ? 0.1 : 1,
                                }}
                            />
                            {isHovered &&
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        position: "absolute",
                                        maxWidth: "70%",
                                        // top: "50%",
                                        // left: "50%",
                                        // transform: "translate(-50%, -50%)",
                                        // transition: "opacity 0.3s ease-in-out",
                                    }}
                                >
                                    <Typography
                                        color={'#FFF'}
                                        fontWeight={"bold"}
                                        textAlign={"center"}
                                        mb={2}
                                        sx={{ fontSize: { xs: "8px", sm: "14px", md: "20px" } }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        color={'#FFF'}
                                        fontWeight={"bold"}
                                        textAlign={"center"}
                                        variant="body2"
                                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                    >
                                        {project.role}
                                    </Typography>
                                    <Typography
                                        color={'#FFF'}
                                        variant="body2"
                                        textAlign={"center"}
                                        mb={2}
                                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ marginTop: "auto", textAlign: "center" }}>
                                        {project.demoLink ? (
                                            <Button
                                                href={project.demoLink}
                                                variant="contained"
                                                target="_blank"
                                                sx={{ fontSize: { xs: "8px", sm: "14px" }, backgroundColor: '#65f9af', color: '#327C57' }}
                                            >
                                                Demo
                                            </Button>
                                        ) : (
                                            <Typography
                                                variant="body2"
                                                color={'#FFF'}
                                                textAlign={"center"}
                                                mb={2}
                                                sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                            >
                                                Demo Not Available
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            }
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </ThemeProvider>
    );
};

export default Project;
