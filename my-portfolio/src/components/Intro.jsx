import React, { useEffect, useState } from "react";
import { Container, Typography, Avatar, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

// Create a theme with responsive font sizes
const theme = createTheme();
const responsiveTheme = responsiveFontSizes(theme);

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Apply initial pop effect when the component mounts
        setIsHovered(true);

        // Clean up the effect
        return () => {
            setIsHovered(false);
        };
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
                <Container id="intro" sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <Typography variant="h3" fontWeight={"bold"} color="textPrimary" align="center" mt={15} mb={3}>
                        Hello, I'm
                    </Typography>
                    <Avatar
                        alt="Heewon's Character"
                        src="/developer.png"
                        sx={{
                            width: { xs: 150, sm: 200, md: 250 },
                            height: { xs: 150, sm: 200, md: 250 },
                            transition: "transform 0.5s ease-in-out",
                            transform: isHovered ? "scale(1.1)" : "scale(0.1)",
                            ":hover": {
                                transform: "scale(1.1)",
                            },
                        }}
                    />
                    <Typography variant="h1" fontWeight={"bold"} color="textPrimary" align="center" mt={3} mb={3}>
                        Heewon Kim
                    </Typography>
                    <Typography variant="body1" align="center" color="textSecondary" paragraph>
                        I'm a passionate Software Developer. Explore my projects and skills to learn more about my work.
                    </Typography>
                </Container>
        </ThemeProvider>
    );
};

export default Intro;
