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
        title: "College Mate App",
        role: "Frontend Developer",
        description:
            "CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students. With CollegeMate, students can create and customize their schedules, download them as share class information them with friends within the app.",
        imageUrls: [
            "./CollegeMate1.png?as=webp",
            "./CollegeMate2.png?as=webp",
            "./CollegeMate3.png?as=webp",
        ],
        demoLink: "https://collegemate.app/",
    },
    {
        title: "Wisconsin SCO",
        role: "Backend Developer",
        description:
            "Simplify survey note retrieval by implementing an intuitive map-based interface, eliminating the need for specialized township knowledge and greatly enhancing user accessibility. \n *Demo cannot be provided because it is company's privacy",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],
    },
    {
        title: "Portfolio",
        role: "Web Developer",
        description:
            "Explore a showcase of my diverse skills and projects in this comprehensive portfolio. From web development to creative design, discover the breadth of my expertise. Click to see my work in action! 👩‍💻🚀 #Portfolio #WebDev #Design",
        imageUrls: [
            "./portfolio1.png?as=webp",
            "./portfolio2.png?as=webp",
            "./portfolio3.png?as=webp",
            "./portfolio4.png?as=webp",
        ],
        demoLink: "https://github.com/Keemeeone/Portfolio/tree/main",
    },
];

const Project = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container
            >
                <Typography fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    Projects
                </Typography>

                <Carousel
                    autoPlay={true}
                    animation="slide"
                    timeout={500}
                    navButtonsAlwaysVisible
                    indicators={false}
                >
                    {projectsData.map((project, index) => (
                        <Box key={index} sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                            <img
                                alt={project.title}
                                src={
                                    project.imageUrls[currentImageIndex] ||
                                    project.imageUrls[0]
                                }
                                style={{ minHeight: "0", height: "100%", minWidth: "0", width: "100%", maxHeight: "50vh", maxWidth: "80%" }}
                            />
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    mb={2}
                                    sx={{ fontSize: { xs: "8px", sm: "14px", md: "20px" } }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    variant="body2"
                                    color="textPrimary"
                                    mb={2}
                                    sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                >
                                    {project.role}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    textAlign={"center"}
                                    mb={2}
                                    sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                >
                                    {project.description}
                                </Typography>
                                <Box sx={{ marginTop: "auto", textAlign: "center" }}>
                                    {project.demoLink && (
                                        <Button
                                            href={project.demoLink}
                                            variant="contained"
                                            color="primary"
                                            target="_blank"
                                            sx={{ fontSize: { xs: "8px", sm: "14px" } }}
                                        >
                                            Demo
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </ThemeProvider>
    );
};

export default Project;
