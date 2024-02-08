// Resume.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import { Container, Typography, Divider, Box, Button, useMediaQuery, useTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const experienceData = [
    {
        title: "Back-end Developer",
        company: "Wisconsin State Cartographer's Office, Madison, WI",
        year: "Sept 2023 - Dec 2023",
        description: [
            "Simplified survey note retrieval through an intuitive map-based interface, enhancing user accessibility.",
            "Click DOWNLOAD RESUME for more information!",
        ],
    },
    {
        title: "Co-Founder & Front-end Developer",
        company: "College Mate App, Madison, WI",
        year: "Oct 2022 - Present",
        description: [
            "Front-end development of the College Mate App to build a connected community among University of Wisconsin–Madison students.",
            "Click DOWNLOAD RESUME for more information!",
        ],
    },
];

const educationData = [
    {
        degree: "Bachelor's in Computer Science",
        school: "University of Wisconsin - Madison",
        year: "Jan 2021 - Dec 2023",
    },
    {
        degree: "Associate's",
        school: "Madison Area Technical College",
        year: "Sept 2019 - Dec 2020",
    },
];

/**
 * Resume component displaying experiences and education with download option.
 */
const Resume = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const handleDownload = () => {
        const resumeFileUrl = "./resume.pdf";

        // Open the PDF file in a new tab
        window.open(resumeFileUrl, "_blank");
    };

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container>
                <Typography fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    RESUME
                </Typography>

                <Typography variant="h4" mt={2} mb={2} style={{ fontSize: isSmallScreen ? "0.75em" : "1.5em" }}>
                    Experiences
                </Typography>
                <Divider mb={2} />

                {experienceData.map((experience, index) => (
                    <Box key={index} mb={1}>
                        <Typography variant="h6" style={{ fontSize: isSmallScreen ? "0.75em" : "1.2em" }}>
                            {experience.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" style={{ fontSize: isSmallScreen ? "0.7em" : "1em" }}>
                            {experience.company} | {experience.year}
                        </Typography>
                        {experience.description.map((point, i) => (
                            <Typography key={i} variant="body1" style={{ fontSize: isSmallScreen ? "0.7em" : "1em" }}>
                                {point}
                            </Typography>
                        ))}
                    </Box>
                ))}

                <Typography variant="h4" mt={2} mb={2} style={{ fontSize: isSmallScreen ? "0.75em" : "1.5em" }}>
                    Education
                </Typography>
                <Divider mb={2} />

                {educationData.map((education, index) => (
                    <Box key={index} mb={1}>
                        <Typography variant="h6" style={{ fontSize: isSmallScreen ? "0.75em" : "1.2em" }}>
                            {education.degree}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" style={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>
                            {education.school} | {education.year}
                        </Typography>
                    </Box>
                ))}

                <Typography variant="subtitle1" mt={2} style={{ fontSize: isSmallScreen ? "0.75em" : "1.2em" }}>
                    Want more information?
                </Typography>

                <Button variant="outlined" onClick={handleDownload} style={{ marginBottom: isSmallScreen ? "10px" : "20px" }}>
                    Download Resume
                </Button>

            </Container>
        </ThemeProvider>
    );
};

export default Resume;
