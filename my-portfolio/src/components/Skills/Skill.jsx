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
    { id: 1, category: "Language", skills: [
        { name: "JavaScript", image: "./javascript.svg" },
        { name: "Java", image: "./java.svg" },
        { name: "C", image: "./c.svg" },
        { name: "Python", image: "./python.svg" },
        { name: "TypeScript", image: "./typescript.svg" },
        // { name: "R", image: "path/to/r-image.jpg" },
    ] },
    { id: 2, category: "Markup", skills: [
        { name: "HTML5", image: "./html.svg" },
        { name: "CSS3", image: "./css.svg" },
    ] },
    { id: 3, category: "Data", skills: [
        { name: "MySQL", image: "./mysql.svg" },
        { name: "JSON", image: "./json.svg" },
    ] },
    { id: 4, category: "Framework", skills: [
        { name: "React", image: "./react.svg" },
        { name: "FastAPI", image: "./fastapi.svg" },
        { name: "Node.js", image: "./nodejs.svg" },
    ] },
    { id: 5, category: "Tool", skills: [
        { name: "Postman", image: "./postman.svg" },
        { name: "Git", image: "./git.svg" },
        { name: "Github", image: "./github.svg" },
        { name: "Linux", image: "./linux.svg" },
        { name: "Jira", image: "./jira.svg" },
    ] },
    { id: 6, category: "Design", skills: [
        { name: "Figma", image: "./figma.svg" },
    ] },
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

                {!userStartedClicking && <Alert severity="info" sx={{ backgroundColor: '#286346', color: '#FFF' }}>Try to Hover Mouse On Icons!</Alert>}

                <Grid container spacing={1}>
                    {skillsData.map((category) => (
                        <Grid item key={category.id} xs={4} sm={6} md={4}>
                            <Typography color={'#FFF'} fontWeight={"bold"} mb={1} textAlign={"center"} sx={{ fontSize: { xs: '12px', sm: '14px', md: '20px' } }}>
                                {/* {category.category} */}
                            </Typography>
                            <Grid container spacing={1}>
                                {category.skills.map((skill, skillIndex) => (
                                    <Grid
                                        item
                                        key={skillIndex}
                                        xs={8}
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
