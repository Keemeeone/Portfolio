import React from "react";
import { Container, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

const experienceData = [
  { title: "Front-end Developer", company: "Tech Company A", year: "2020 - Present" },
  { title: "UI/UX Designer", company: "Design Studio B", year: "2018 - 2020" },
  // Add more experiences as needed
];

const educationData = [
  { degree: "Bachelor's in Computer Science", school: "University XYZ", year: "2014 - 2018" },
  // Add more education details as needed
];

const Resume = () => {
  return (
    <Container id="resume">
      <Typography variant="h2" align="center" mt={5} mb={3}>
        Resume
      </Typography>

      <Typography variant="h4" mt={3} mb={2}>
        Experience
      </Typography>
      <Divider mb={3} />

      <List>
        {experienceData.map((experience, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText
              primary={
                <>
                  <Typography variant="h6">{experience.title}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {experience.company} | {experience.year}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" mt={5} mb={2}>
        Education
      </Typography>
      <Divider mb={3} />

      <List>
        {educationData.map((education, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText
              primary={
                <>
                  <Typography variant="h6">{education.degree}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {education.school} | {education.year}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Resume;
