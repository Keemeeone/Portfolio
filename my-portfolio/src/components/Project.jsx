import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button, Box } from "@mui/material";

const projectsData = [
    {
        title: "College Mate App",
        description: "CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students.",
        imageUrls: ["./CollegeMate.png?as=webp"],  // Converted to an array
        demoLink: "https://collegemate.app/",
    },
    {
        title: "Wisconsin State Cartographer's Office",
        description: "Simplify survey note retrieval by implementing an intuitive map-based interface, eliminating the need for specialized township knowledge and greatly enhancing user accessibility. \n *Demo cannot be provided because it is company's privacy",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],  // Converted to an array
    },
    {
        title: "Portfolio",
        description: "Explore a showcase of my diverse skills and projects in this comprehensive portfolio. From web development to creative design, discover the breadth of my expertise. Click to see my work in action! 👩‍💻🚀 #Portfolio #WebDev #Design",
        imageUrls: ["./portfolio1.png?as=webp", "./portfolio2.png?as=webp"],  // Converted to an array
        demoLink: "https://github.com/Keemeeone/Portfolio/tree/main",
    },
];

const Project = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
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
            <Typography variant="h2" fontWeight={"bold"} align="center" mb={5}>
                Projects
            </Typography>

            <Grid container spacing={3}>
                {projectsData.map((project, index) => (
                    <Grid item key={index} xs={4} sm={6} md={4}>
                        <Card elevation={3} sx={{ height: "100%", width: "100%" }} >
                            <CardMedia
                                component="img"
                                alt={project.title}
                                height="140"
                                image={project.imageUrls[currentImageIndex] ? project.imageUrls[currentImageIndex] : project.imageUrls[0]}
                                sx={{ height: { xs: '40', sm: '100', md: '140' } }}
                            />
                            <CardContent flexDirection={"column"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography fontWeight={"bold"} textAlign={"center"} sx={{ fontSize: { xs: '8px', sm: '14px', md: '20px' } }}>{project.title}</Typography>
                                <Typography variant="body2" color="textSecondary" textAlign={"center"} mb={2} sx={{ fontSize: { xs: '8px', sm: '14px' } }} >
                                    {project.description}
                                </Typography>
                                <Box sx={{ flex: 1 }}>
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
    );
};

export default Project;