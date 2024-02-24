// Resume.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

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

]

const Hexagon = styled('div')`
  width: 30vw; 
  height: 30vw;
  background-color: #65f9af;
  position: absolute;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 1;
`;

const HexagonImage = styled('img')`
  width: 30vw;
  height: 30vw;
  object-fit: cover;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 2;
  transition: transform 0.5s ease; // Add a transition for the transform property

  ${({ activeIndex }) => activeIndex <= 7 && `
    transform: rotateY(180deg) perspective(1000px);
  `}
`;

/**
 * Resume component displaying experiences and education with download option.
 */
const Resume = ({ activeIndex }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    console.log("activeIndex", activeIndex)

    const handleDownload = () => {
        const resumeFileUrl = "./resume.pdf";

        // Open the PDF file in a new tab
        window.open(resumeFileUrl, "_blank");
    };

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    RESUME
                </Typography>

                <Grid container spacing={2} justifyContent="center" display="flex">
                    <Grid item xs={6} md={4} justifyContent="center" display="flex" style={{ position: 'relative'}}>
                        {/* Pentagon shape */}
                        <Hexagon sx={{width:{xl:'20vw'}, height:{xl:'20vw'}}}/> 

                        <HexagonImage src="/developer.png?as=webp"alt="Heewon's profile picture" activeIndex={activeIndex} sx={{width:{xl:'20vw'}, height:{xl:'20vw'}}}/>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Timeline position="alternate" style={{ height: "50vh" }}>
                            {timeLineData.map((timeline) => (
                                <TimeLineCard key={timeline.id} {...timeline} />
                            ))}
                        </Timeline>
                    </Grid>
                    {/* <Grid item xs={12} md={4} justifyContent="center" display="flex"> */}
                        <Button variant='contained' onClick={handleDownload} style={{ color:'#327C57', backgroundColor:'#65f9af' }}>
                            Download Resume
                        </Button> 
                    {/* </Grid> */}
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Resume;
