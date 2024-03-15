// Resume.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React from "react";

import { Timeline } from "@mui/lab";
import {
    Container,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    responsiveFontSizes,
    ThemeProvider,
    Grid,
    styled
} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';

import TimeLineCard from "./TimeLineCard";

// Data for timeline experiences and education
const timeLineData = [
    {
        id: 1,
        time: "Sept 2019 - Dec 2020",
        activity: "Madison Area Technical College",
        details: "Associate's",
        icon: SchoolIcon,
    },
    {
        id: 2,
        time: "Jan 2021 - Dec 2023",
        activity: "University of Wisconsin - Madison",
        details: "Bachelor's in Computer Science",
        icon: SchoolIcon,
    },
    {
        id: 3,
        time: "Oct 2022 - Present",
        activity: "College Mate App, Madison, WI",
        details: "Co-Founder & Front-end Developer",
        icon: DevicesIcon,
    },
    {
        id: 4,
        time: "Sept 2023 - Dec 2023",
        activity: "Wisconsin State Cartographer's Office, Madison, WI",
        details: "Back-end Developer",
        icon: DevicesIcon,
    },
];

// Styling for hexagon shape
const Hexagon = styled('div')`
  width: 30vw; 
  height: 30vw;
  background-color: #65f9af;
  position: absolute;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 1;
`;

// Styling for hexagon image
const HexagonImage = styled('img')`
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 2;
  transition: transform 0.5s ease;

  ${({ activeIndex }) => activeIndex <= 7 && `
    transform: rotateY(180deg) perspective(1000px);
  `}
`;

/**
 * Resume component displaying experiences and education with download option.
 * @param {number} activeIndex - Index of the currently active section.
 * @returns {JSX.Element} - JSX element representing the resume component.
 */
const Resume = ({ activeIndex }) => {
    // Theme and media query hooks
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    // Event handler for downloading resume
    const handleDownload = () => {
        const resumeFileUrl = "./resume.pdf";

        // Open the PDF file in a new tab
        window.open(resumeFileUrl, "_blank");
    };

    // Render the Resume component with timeline and download option
    return (
        <ThemeProvider theme={responsiveTheme}>
            {/* Container for resume section */}
            <Container>
                {/* Title for resume section */}
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    RESUME
                </Typography>

                {/* Grid layout for resume content */}
                <Grid container spacing={2} justifyContent="center" display="flex">
                    {/* Grid item for profile picture */}
                    <Grid item xs={6} md={4} justifyContent="center" display="flex" style={{ position: 'relative' }}>
                        {/* Pentagon shape */}
                        <Hexagon sx={{ width: { xl: '20vw' }, height: { xl: '20vw' } }} />

                        {/* Profile picture */}
                        <HexagonImage src="/developer.png?as=webp" alt="Heewon's profile picture" activeIndex={activeIndex} sx={{ width: { xl: '20vw' }, height: { xl: '20vw' } }} />
                    </Grid>
                    {/* Grid item for timeline */}
                    <Grid item xs={12} md={8} >
                        {/* Timeline component */}
                        <Timeline position="alternate" style={{ height: "50vh" }}>
                            {/* Mapping through timeline data to render TimeLineCard components */}
                            {timeLineData.map((timeline) => (
                                <TimeLineCard key={timeline.id} {...timeline} />
                            ))}
                        </Timeline>
                    </Grid>
                    {/* Button for downloading resume */}
                    <Button variant='contained' onClick={handleDownload} style={{ color: '#327C57', backgroundColor: '#65f9af' }}>
                        Download Resume
                    </Button>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Resume;
