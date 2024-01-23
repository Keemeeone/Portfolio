import React from "react";
import { Container, Typography, Card, CardContent, Grid, LinearProgress } from "@mui/material";

const skillsData = [
  { title: "JavaScript", level: 80 },
  { title: "React.js", level: 85 },
  { title: "HTML5", level: 90 },
  { title: "CSS3", level: 85 },
  // Add more skills as needed
];

const Skill = () => {
  return (
    <Container id="skill">
      <Typography variant="h2" align="center" mt={5} mb={3}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {skill.title}
                </Typography>
                <LinearProgress variant="determinate" value={skill.level} />
                <Typography variant="body2" color="textSecondary" mt={2}>
                  Level: {skill.level}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skill;
