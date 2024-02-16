import React from "react";
import { Box, Container, Typography } from "@mui/material";

/**
 * Footer component displaying copyright information.
 */
const Footer = () => {
    const footerStyle = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    };

    const containerStyle = {
        backgroundColor: 'rgba(40, 99, 70, 0.2)',
        color: 'white',
        borderRadius: '4px',
        minWidth: '100%',
    };

    return (
        <Box sx={footerStyle} >
            <Container component="footer" sx={containerStyle}>
                <Typography color="#FFF" variant="body2" align="center">
                    &copy; 2024 Heewon Kim. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
