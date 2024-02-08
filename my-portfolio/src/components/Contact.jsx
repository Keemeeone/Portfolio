// Contact.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

/**
 * Contact component displaying contact information and links.
 */
const Contact = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={responsiveTheme}>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                    }}
                >
                    <Typography fontWeight={"bold"} variant="h2" sx={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                        CONTACT
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
        </ThemeProvider>
    );
};

export default Contact;
