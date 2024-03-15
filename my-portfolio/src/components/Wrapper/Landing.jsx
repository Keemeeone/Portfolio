// Wrapper.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary components and icons
import React from "react";
import Intro from "../Home/Home";
import AIchat from "../AIchat/AIchat";
import { Container, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 * @param {object} activeIndex - Index of the active section.
 * @returns {JSX.Element} - JSX element containing the landing page layout.
 */
const Landing = ({ activeIndex }) => {
    return (
        // Container for the landing page
        <Container style={{ marginTop: "15vh", textAlign: "center" }}>
            {/* Grid layout for sections */}
            <Grid container spacing={4} justifyContent="center" display="flex">
                <Grid item md={6}><Intro activeIndex={activeIndex} /></Grid> {/* Introduction section */}
                <Grid item md={6}><AIchat /></Grid> {/* AI chat section */}
            </Grid>,
            {/* CSS styling for the animation */}
            <style>
                {`
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-10px);
                            }
                            60% {
                                transform: translateY(-10px);
                            }
                        }
                    `}
            </style>
            {/* Arrow icon for scrolling */}
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40, color: "#FFF", animation: "bounce 1s infinite" }} />
        </Container>
    );
};

export default Landing;
