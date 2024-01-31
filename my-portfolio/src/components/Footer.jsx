// Footer.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import { Box, Container, Typography } from "@mui/material";

/**
 * Footer component displaying copyright information.
 */
const Footer = () => {
    const footerStyle = {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    };

    return (
        <Box sx={footerStyle} >
            <Container component="footer" bgcolor="primary.main" color="white">
                <Typography variant="body2" align="center">
                    &copy; 2024 Heewon Kim. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
