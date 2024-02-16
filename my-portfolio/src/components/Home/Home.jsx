// Intro.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useEffect, useState } from "react";
import { Container, Typography, createTheme, responsiveFontSizes, ThemeProvider, styled, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {ReactTyped} from "react-typed"

// Create a theme with responsive font sizes
const theme = createTheme();
const responsiveTheme = responsiveFontSizes(theme);

const Hexagon = styled('div')`
  width: 20vw; 
  height: 20vw;
  background-color: #65f9af;
  position: absolute;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 0;
`;

const HexagonImage = styled('img')`
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 2;
`;

/**
 * Intro component displaying introductory information and an avatar.
 */
const Intro = ({ activeIndex }) => {
    const [TTransform, setTTransform] = useState("scale(0.0)");
    const [avatarTransform, setAvatarTransform] = useState("scale(0.0)");
    const [nTransform, setNTransform] = useState("scale(0.0)");
    const [subTransform, setSubTransform] = useState("scale(0.0)");


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (activeIndex === 0) {
                setTTransform("scale(1.0)");
                setAvatarTransform("scale(1.1)");
                setSubTransform("scale(1.0)");
                setNTransform("scale(1.0)");
            } else {
                setTTransform("scale(0.0)");
                setAvatarTransform("scale(0.0)");
                setSubTransform("scale(0.0)");
                setNTransform("scale(0.0)");
            }
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [activeIndex]);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container id="intro" sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "12.5vh" }}>
                <Typography flex={1} variant="h3" fontWeight={"bold"} color="#FFF" align="center" mb={3} sx={{ transition: "transform 0.3s ease-in-out", transform: TTransform, zIndex: 1 }}>
                    Hello, I'm
                </Typography>
                {/* <Avatar
                    alt="Heewon's Character"
                    src="/developer.png?as=webp"
                    loading="lazy"
                    sx={{
                        width: { xs: 150, sm: 200, md: 250 },
                        height: { xs: 150, sm: 200, md: 250 },
                        transition: "transform 0.6s ease-in-out",
                        transform: avatarTransform,
                        border: "5px solid #65f9af",
                        borderRadius: "50%",
                    }}
                /> */}
                <Box style={{ position: 'relative' }}>
                    <Hexagon sx={{ transition: "transform 0.3s ease-in-out", transform: avatarTransform, width: { xs: '30vw', md: '20vw' }, height: { xs: '30vw', md: '20vw' } }} />

                    <HexagonImage src="./profile.png?as=webp" alt="Heewon's profile picture" sx={{ transition: "transform 0.6s ease-in-out", transform: avatarTransform, width: { xs: '30vw', md: '20vw' }, height: { xs: '30vw', md: '20vw' } }} />
                </Box>
                <Typography variant="h1" fontWeight={"bold"} color="#FFF" align="center" mt={3} mb={3} sx={{ transition: "transform 0.9s ease-in-out", transform: nTransform, }}>
                    Heewon Kim
                </Typography>
                <ReactTyped strings={["I'm a passionate Software Developer. <br/> Explore my projects and skills to learn more about my possibility."]} typeSpeed={40} backSpeed={60} loop style={{color:"#FFF", fontWeight:'bold', textAlign:'center', transition: "transform 1.2s ease-in-out", transform: subTransform}}/>

                {/* <Typography variant="body1" align="center" color="#FFF" paragraph sx={{ transition: "transform 1.2s ease-in-out", transform: subTransform, }}>
                    I'm a passionate Software Developer. Explore my projects and skills to learn more about my work.
                </Typography> */}
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
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40, color: "#FFF", marginTop: 3, animation: "bounce 1s infinite" }} />
            </Container>
        </ThemeProvider>
    );
};

export default Intro;
