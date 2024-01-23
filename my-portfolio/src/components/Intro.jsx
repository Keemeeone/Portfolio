import React from "react";
import { Container, Typography } from "@mui/material";
import { Parallax } from "react-parallax";

const Intro = () => {
  return (
    <Parallax bgImage="/developer.GIF" strength={500} style={{ height: "100%" }}>
      <Container id="intro">
        <Typography variant="h2" align="center" mt={5} mb={3}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          Hi, I'm a passionate front-end developer. Explore my projects and skills to learn more about my work.
        </Typography>
      </Container>
    </Parallax>
  );
};

export default Intro;
