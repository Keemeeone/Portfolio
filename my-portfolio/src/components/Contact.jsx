import React from "react";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={responsiveTheme}>
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
                <Typography fontWeight={"bold"} variant="h2" mt={5} mb={3} style={{ fontSize: isSmallScreen ? "1em" : "3em", textAlign: "center" }}>
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
            </Container>
        </ThemeProvider>
    );
};

export default Contact;
