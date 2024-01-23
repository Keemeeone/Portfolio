import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";

const projectsData = [
    {
        title: "College Mate App",
        description: "CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students.",
        imageUrls: ["./CollegeMate.png?as=webp"],  // Converted to an array
        demoLink: "https://collegemate.app/",
    },
    {
        title: "Wisconsin State Cartographer's Office",
        description: "Simplify survey note retrieval by implementing an intuitive map-based interface, eliminating the need for specialized township knowledge and greatly enhancing user accessibility.",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],  // Converted to an array
        demoLink: "#",
    },
    {
        title: "Project B",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrls: ["https://via.placeholder.com/300"],  // Converted to an array
        demoLink: "#",
    },
];

const Project = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the image index to the next one in a cyclic manner
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 1500); // Change image every 5 seconds (adjust the interval as needed)

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
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
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card elevation={3}>
                            <CardMedia
                                component="img"
                                alt={project.title}
                                height="140"
                                image={project.imageUrls[currentImageIndex] ? project.imageUrls[currentImageIndex] : project.imageUrls[0]}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>{project.title}</Typography>
                                <Typography variant="body2" color="textSecondary"  textAlign={"center"} mb={5}>
                                    {project.description}
                                </Typography>
                                <Button href={project.demoLink} variant="contained" color="primary" target="_blank">
                                    Demo
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Project;