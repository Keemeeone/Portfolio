// Wrapper.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";

import Intro from "../Home/Home";
import AIchat from "../AIchat/AIchat";
import { Container, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 */
const Landing = () => {
    return (
        <Container style={{ marginTop: "12.5vh", textAlign: "center" }}>
            <Grid container spacing={4} justifyContent="center" display="flex">
                <Grid item xs={6} md={6}><Intro /></Grid>
                <Grid item xs={6} md={6}><AIchat /></Grid>
            </Grid>,
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
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40, color: "#FFF", animation: "bounce 1s infinite" }} />
        </Container>
    );
};

export default Landing;
