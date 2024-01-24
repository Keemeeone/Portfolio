import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button, Box, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";

const projectsData = [
    {
        title: "College Mate App",
        role: "Frontend Developer",
        description: "CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students. With CollegeMate, students can create and customize their schedules, download them as share class information them with friends within the app.",
        imageUrls: ["./CollegeMate.png?as=webp"],
        demoLink: "https://collegemate.app/",
    },
    {
        title: "Wisconsin SCO",
        role: "Backend Developer",
        description: "Simplify survey note retrieval by implementing an intuitive map-based interface, eliminating the need for specialized township knowledge and greatly enhancing user accessibility. \n *Demo cannot be provided because it is company's privacy",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],
    },
    {
        title: "Portfolio",
        role: "Web Developer",
        description: "Explore a showcase of my diverse skills and projects in this comprehensive portfolio. From web development to creative design, discover the breadth of my expertise. Click to see my work in action! 👩‍💻🚀 #Portfolio #WebDev #Design",
        imageUrls: ["./portfolio1.png?as=webp", "./portfolio2.png?as=webp"],
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
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container
                id="intro"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <Typography fontWeight={"bold"} variant="h2" mt={5} mb={3} style={{ fontSize: isSmallScreen ? "1em" : "3em", textAlign: "center" }}>
                    Projects
                </Typography>

                <Grid container spacing={3}>
                    {projectsData.map((project, index) => (
                        <Grid item key={index} xs={4} sm={6} md={4}>
                            <Card elevation={3} sx={{ height: { xs: "80%", sm: "80%", md: "100%" }, display: "flex", flexDirection: "column" }}>
                                <CardMedia
                                    component="img"
                                    alt={project.title}
                                    height="140"
                                    image={project.imageUrls[currentImageIndex] ? project.imageUrls[currentImageIndex] : project.imageUrls[0]}
                                    sx={{ height: { xs: '40', sm: '100', md: '140' } }}
                                />
                                <CardContent sx={{ flexDirection: "column", display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <Typography fontWeight={"bold"} textAlign={"center"} mb={2} sx={{ fontSize: { xs: '8px', sm: '14px', md: '20px' } }}>{project.title}</Typography>
                                    <Typography fontWeight={"bold"} textAlign={"center"} variant="body2" color="textPrimary" mb={2} sx={{ fontSize: { xs: '8px', sm: '14px' } }}>
                                        {project.role}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" textAlign={"center"} mb={2} sx={{ fontSize: { xs: '8px', sm: '14px' } }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ marginTop: "auto", textAlign: "center" }}>
                                        {project.demoLink && (
                                            <Button href={project.demoLink} variant="contained" color="primary" target="_blank" sx={{ fontSize: { xs: '8px', sm: '14px' } }}>
                                                Demo
                                            </Button>
                                        )}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Project;
