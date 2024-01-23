import React from "react";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Container id="contact">
      <Typography variant="h2" align="center" mt={5} mb={3}>
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
                <Typography variant="body1">your.email@example.com</Typography>
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
                <Typography variant="body1">+1 (123) 456-7890</Typography>
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
                  <Button href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
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
                  <Button href="https://github.com/your-github-profile" target="_blank">
                    Visit GitHub Profile
                  </Button>
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default Contact;
