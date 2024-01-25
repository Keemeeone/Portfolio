// Footer.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: {$SPDX_license_name}
*/

import React from "react";
import { Box, Container, Typography } from "@mui/material";

/**
 * Footer component displaying copyright information.
 */
const Footer = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: 30,
        width: '100%',
    };

    return (
        <Box sx={footerStyle} >
            <Container component="footer" py={3} bgcolor="primary.main" color="white">
                <Typography variant="body2" align="center">
                    &copy; 2024 Heewon Kim. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
