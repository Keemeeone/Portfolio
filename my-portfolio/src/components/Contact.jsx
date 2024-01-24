import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const domTarget = useRef(null);
    const [springProps, set] = useSpring(() => ({ opacity: 0 }));

    useEffect(() => {
        const handleScroll = () => {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4,
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

    return (
        <ThemeProvider theme={responsiveTheme}>
            <animated.div
                ref={domTarget}
                style={{
                    opacity: springProps.opacity,
                    transition: "opacity 0.5s ease",
                }}
            >
                <Container
                    id="intro"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <Typography fontWeight={"bold"} variant="h2" mt={15} sx={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                        Contact
                    </Typography>

                    <List>
                        <ListItem disableGutters>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <>
                                        <Typography variant="h6" sx={{ fontSize: isSmallScreen ? "1em" : "1.25em" }}>Email</Typography>
                                        <Typography variant="body1" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>khw0285@gmail.com</Typography>
                                    </>
                                }
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <>
                                        <Typography variant="h6" sx={{ fontSize: isSmallScreen ? "1em" : "1.25em" }}>Phone</Typography>
                                        <Typography variant="body1" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>+1 (608) 471-8707</Typography>
                                    </>
                                }
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <>
                                        {/* <Typography variant="h6" sx={{ fontSize: isSmallScreen ? "1em" : "1.25em"}}>LinkedIn</Typography> */}
                                        <Typography variant="body1">
                                            <Button href="https://www.linkedin.com/in/heewon-kim-hkim/" target="_blank" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>
                                                LinkedIn
                                            </Button>
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <>
                                        {/* <Typography variant="h6" sx={{ fontSize: isSmallScreen ? "1em" : "1.25em"}}>GitHub</Typography> */}
                                        <Typography variant="body1">
                                            <Button href="https://github.com/Keemeeone" target="_blank" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>
                                                GitHub Profile
                                            </Button>
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Container>
                <Footer />
            </animated.div>
        </ThemeProvider>
    );
};

export default Contact;
