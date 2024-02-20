// Skill.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { Container, Typography, Grid, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider, Alert } from "@mui/material";

/**
 * Skill component displaying the user's skills.
 */
const skillsData = [
    { id: 1, category: "Language", skills: ["JavaScript", "Java", "C", "Python", "TypeScript", "R"] },
    { id: 2, category: "Markup", skills: ["HTML5", "CSS3"] },
    { id: 3, category: "Data", skills: ["MySQL", "JSON"] },
    { id: 4, category: "Framework", skills: ["React", "React-Native", "FastAPI", "Node.js"] },
    { id: 5, category: "Tool", skills: ["Postman", "Git", "Github", "Linux", "Jira"] },
    { id: 6, category: "Design", skills: ["Figma"] },
];

const Skill = ({ activeIndex }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const [userStartedClicking, setUserStartedClicking] = useState(false);

    const handleCardClick = () => {
        setUserStartedClicking(true);
    };

    const handleTouchStart = () => {
        setUserStartedClicking(true);
    };

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center", }}>
                    SKILLS
                </Typography>

                {!userStartedClicking && <Alert severity="info" sx={{ backgroundColor: '#286346', color: '#FFF' }}>Try to move Post-it!</Alert>}

                <Grid container spacing={1}>
                    {skillsData.map((category) => (
                        <Grid item key={category.id} xs={4} sm={6} md={4}>
                            <Typography color={'#FFF'} fontWeight={"bold"} mb={1} textAlign={"center"} sx={{ fontSize: { xs: '12px', sm: '14px', md: '20px' } }}>
                                {category.category}
                            </Typography>
                            <Grid container spacing={1}>
                                {category.skills.map((skill, skillIndex) => (
                                    <Grid
                                        item
                                        key={skillIndex}
                                        xs={6}
                                        sm={4}
                                        md={6}
                                        onClick={handleCardClick}
                                        onTouchStart={handleTouchStart}
                                    // sx={{transition:"transform 0.3s ease", transform: activeIndex !== 1 ? "rotateZ(15deg)" : ''}}
                                    >
                                        <SkillCard skill={skill} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Skill;
