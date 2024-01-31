// Intro.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useEffect, useState } from "react";
import { Container, Typography, Avatar, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// Create a theme with responsive font sizes
const theme = createTheme();
const responsiveTheme = responsiveFontSizes(theme);

/**
 * Intro component displaying introductory information and an avatar.
 */
const Intro = () => {
    const [avatarTransform, setAvatarTransform] = useState("scale(0.1)");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAvatarTransform("scale(1.1)");
        }, 200);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container id="intro" sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12.5vh" }}>
                <Typography variant="h3" fontWeight={"bold"} color="textPrimary" align="center" mb={3}>
                    Hello, I'm
                </Typography>
                <Avatar
                    alt="Heewon's Character"
                    src="/developer.png"
                    sx={{
                        width: { xs: 150, sm: 200, md: 250 },
                        height: { xs: 150, sm: 200, md: 250 },
                        transition: "transform 0.5s ease-in-out",
                        transform: avatarTransform,
                    }}
                />
                <Typography variant="h1" fontWeight={"bold"} color="textPrimary" align="center" mt={3} mb={3}>
                    Heewon Kim
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" paragraph>
                    I'm a passionate Software Developer. Explore my projects and skills to learn more about my work.
                </Typography>
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
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40, color: "textPrimary", marginTop: 3, animation: "bounce 1s infinite" }} />
            </Container>
        </ThemeProvider>
    );
};

export default Intro;
