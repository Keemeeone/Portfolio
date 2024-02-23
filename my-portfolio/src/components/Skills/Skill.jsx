// Skill.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import SkillCard from "./SkillCard";
import { Container, Typography, Grid, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";

/**
 * Skill component displaying the user's skills.
 */
const skillsData = [
    { name: "JavaScript", image: "./javascript.svg" },
    { name: "Java", image: "./java.svg" },
    { name: "C", image: "./c.svg" },
    { name: "Python", image: "./python.svg" },
    { name: "TypeScript", image: "./typescript.svg" },
    { name: "HTML5", image: "./html.svg" },
    { name: "CSS3", image: "./css.svg" },
    { name: "MySQL", image: "./mysql.svg" },
    { name: "JSON", image: "./json.svg" },
    { name: "React", image: "./react.svg" },
    { name: "FastAPI", image: "./fastapi.svg" },
    { name: "Node.js", image: "./nodejs.svg" },
    { name: "Postman", image: "./postman.svg" },
    { name: "Git", image: "./git.svg" },
    { name: "Github", image: "./github.svg" },
    { name: "Linux", image: "./linux.svg" },
    { name: "Jira", image: "./jira.svg" },
    { name: "Figma", image: "./figma.svg" },
];

const Skill = ({ activeIndex }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    // const [userStartedClicking, setUserStartedClicking] = useState(false);

    // const handleCardClick = () => {
    //     setUserStartedClicking(true);
    // };

    // const handleTouchStart = () => {
    //     setUserStartedClicking(true);
    // };

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={isSmallScreen ? 5 : 15} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center", }}>
                    SKILLS
                </Typography>

                <Grid container spacing={1}>
                        <Grid container spacing={1}>
                            {skillsData.map((skill, skillIndex) => (
                                <Grid
                                    item
                                    key={skillIndex}
                                    xs={4}
                                    sm={4}
                                    md={2}
                                >
                                    <SkillCard skill={skill} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Skill;
