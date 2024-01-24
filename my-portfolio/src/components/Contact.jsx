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

    const debounce = (func, delay) => {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(() => {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newOpacity = Math.min(1, Math.max(0, (window.innerHeight - entry.boundingClientRect.top) / (entry.boundingClientRect.height)));
                        set({ opacity: newOpacity });
                    } else {
                        set({ opacity: 0 });
                    }
                });
            }, options);

            if (domTarget.current) {
                observer.observe(domTarget.current);
            }
        }, 100); // 200ms 디바운스 지연 시간

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
                    transition: "opacity 0.2s ease",
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
                    <Typography fontWeight={"bold"} variant="h2" mt={15} mb={3} style={{ fontSize: isSmallScreen ? "1em" : "3em", textAlign: "center" }}>
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
                                        <Typography variant="h6">Email</Typography>
                                        <Typography variant="body1">khw0285@gmail.com</Typography>
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
                                        <Typography variant="h6">Phone</Typography>
                                        <Typography variant="body1">+1 (608) 471-8707</Typography>
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
                                        <Typography variant="h6">LinkedIn</Typography>
                                        <Typography variant="body1">
                                            <Button href="https://www.linkedin.com/in/heewon-kim-hkim/" target="_blank">
                                                Connect on LinkedIn
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
                                        <Typography variant="h6">GitHub</Typography>
                                        <Typography variant="body1">
                                            <Button href="https://github.com/Keemeeone" target="_blank">
                                                Visit GitHub Profile
                                            </Button>
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                    <Footer />
                </Container>
            </animated.div>

        </ThemeProvider>
    );
};

export default Contact;
