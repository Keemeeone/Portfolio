import React from "react";
import { Container, Typography, Avatar } from "@mui/material";

const Intro = () => {
  return (
    <Container id="intro" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Typography variant="h3" fontWeight={"bold"} color="textpPimary" align="center" mt={3} mb={3}>
        Portfolio
      </Typography>
      <Avatar alt="Heewon's Chracter" src="/developer.png" sx={{ width: 250, height: 250 }} />
      <Typography variant="h1" fontWeight={"bold"} color="textpPimary" align="center" mt={3} mb={3}>
        Heewon Kim
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        Hi, I'm a passionate Software Developer. Explore my projects and skills to learn more about my work.
      </Typography>
    </Container>
  );
};

export default Intro;
