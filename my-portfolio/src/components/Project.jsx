import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";

const projectsData = [
  {
    title: "Project A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/300",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Project B",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/300",
    demoLink: "#",
    codeLink: "#",
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <Container id="project">
      <Typography variant="h2" align="center" mt={5} mb={3}>
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
                image={project.imageUrl}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {project.description}
                </Typography>
                <Button href={project.demoLink} variant="contained" color="primary" target="_blank">
                  Demo
                </Button>
                <Button href={project.codeLink} variant="outlined" color="primary" target="_blank" ml={1}>
                  Code
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
