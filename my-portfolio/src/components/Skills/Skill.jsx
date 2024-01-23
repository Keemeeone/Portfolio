import React from "react";
import SkillCard from "./SkillCard";
import { Container, Typography, Grid } from "@mui/material";

const skillsData = [
    { category: "Language", skills: ["JavaScript", "Java", "C", "Python", "TypeScript", "R"] },
    { category: "Markup", skills: ["HTML5", "CSS3"] },
    { category: "Data", skills: ["MySQL", "JSON"] },
    { category: "Framework", skills: ["React", "React-Native", "FastAPI", "Node.js"] },
    { category: "Tool", skills: ["Postman", "Git", "Github", "Linux", "Jira"] },
    { category: "Design", skills: ["Figma"] },
];

const Skill = () => {
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
                Skills
            </Typography>

            <Grid container spacing={1}>
                {skillsData.map((category, index) => (
                    <Grid item key={index} xs={4} sm={6} md={4}>
                        <Typography color={"GrayText"} mb={2} textAlign={"center"} sx={{ fontSize: { xs: '12px', sm: '14px', md: '20px' } }}>
                            {category.category}
                        </Typography>
                        <Grid container spacing={1}>
                            {category.skills.map((skill, skillIndex) => (
                                <Grid item key={skillIndex} xs={5} sm={4} md={6}>
                                    <SkillCard skill={skill} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Skill;
