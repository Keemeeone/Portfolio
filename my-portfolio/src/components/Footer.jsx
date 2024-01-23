import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {

    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
    };

    return (
        <Box sx={footerStyle}>
            <Container component="footer" mt={5} py={3} bgcolor="primary.main" color="white">
                <Typography variant="body2" align="center">
                    &copy; 2024 Heewon Kim. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
