import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Container, Typography, Avatar, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

// Create a theme with responsive font sizes
const theme = createTheme();
const responsiveTheme = responsiveFontSizes(theme);

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);
    const domTarget = useRef(null);
    const [springProps, set] = useSpring(() => ({ opacity: 0 }));

    useEffect(() => {
        const handleScroll = () => {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.8,
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newOpacity = Math.max(1, Math.max(0, (window.innerHeight - entry.boundingClientRect.top) / (entry.boundingClientRect.height)));
                        set({ opacity: newOpacity });
                    } else {
                        set({ opacity: 0 });
                    }
                });
            }, options);

            if (domTarget.current) {
                observer.observe(domTarget.current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [set, domTarget]);

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
            <animated.div
                ref={domTarget}
                style={{
                    opacity: springProps.opacity,
                    transition: "opacity 0.3s ease",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"
                }}
            >
                <Container id="intro" sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <Typography variant="h3" fontWeight={"bold"} color="textPrimary" align="center" mt={3} mb={3}>
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
            </animated.div>
        </ThemeProvider>
    );
};

export default Intro;
