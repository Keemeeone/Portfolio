// Contact.jsx
import React from "react";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Footer from "../Footer/Footer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

/**
 * Contact component displaying contact information and links.
 * @returns {JSX.Element} - Contact component JSX.
 */
const Contact = () => {
    // Get theme and screen size information
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    // Render the Contact component
    return (
        <ThemeProvider theme={responsiveTheme}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Contact Title */}
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" sx={{ fontSize: isSmallScreen ? "1.5em" : "3em", textAlign: "center" }}>
                    CONTACT
                </Typography>

                {/* Contact Information List */}
                <List>
                    {/* Email */}
                    <ListItem disableGutters>
                        <ListItemIcon>
                            <EmailIcon sx={{ color: '#FFF' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="h6" color={'#FFF'} sx={{ fontSize: isSmallScreen ? "1em" : "1.25em" }}>Email</Typography>
                                    <Typography variant="body1" color={'#FFF'} sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>khw0285@gmail.com</Typography>
                                </>
                            }
                        />
                    </ListItem>

                    {/* Phone */}
                    <ListItem disableGutters>
                        <ListItemIcon>
                            <PhoneIcon sx={{ color: '#FFF' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="h6" color={'#FFF'} sx={{ fontSize: isSmallScreen ? "1em" : "1.25em" }}>Phone</Typography>
                                    <Typography variant="body1" color={'#FFF'} sx={{ fontSize: isSmallScreen ? "0.75em" : "1em" }}>+1 (608) 471-8707</Typography>
                                </>
                            }
                        />
                    </ListItem>

                    {/* LinkedIn */}
                    <ListItem disableGutters>
                        <ListItemIcon>
                            <LinkedInIcon sx={{ color: '#FFF' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="body1">
                                        <Button href="https://www.linkedin.com/in/heewon-kim-hkim/" target="_blank" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em", color: '#FFF' }}>
                                            LinkedIn
                                        </Button>
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>

                    {/* GitHub */}
                    <ListItem disableGutters>
                        <ListItemIcon>
                            <GitHubIcon sx={{ color: '#FFF' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="body1">
                                        <Button href="https://github.com/Keemeeone" target="_blank" sx={{ fontSize: isSmallScreen ? "0.75em" : "1em", color: '#FFF' }}>
                                            GitHub Profile
                                        </Button>
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Container>
            {/* Footer */}
            <Footer />
        </ThemeProvider>
    );
};

export default Contact;
