// Skill.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React from "react";
import SkillCard from "./SkillCard";
import data from "../../data/data";
import { Container, Typography, Grid, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";

/**
 * Skill component displaying the user's skills.
 */
// Extracting skills data from external data source
const skillsData = data.skillsData;

const Skill = () => {
    // Theme and media query hooks
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    // Render the Skill component with skills data and responsive design
    return (
        <ThemeProvider theme={responsiveTheme}>
            {/* Container for skills section */}
            <Container>
                {/* Title for skills section */}
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={isSmallScreen ? 5 : 15} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center", }}>
                    SKILLS
                </Typography>

                {/* Grid layout for skill cards */}
                <Grid container spacing={1}>
                    {/* Mapping through skills data to render SkillCard components */}
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
            </Container>
        </ThemeProvider>
    );
};

export default Skill;
