// Project.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

/**
 * Functional component representing a project display.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.selectedTab - Currently selected tab with project details.
 * @param {Array} props.projectsData - Array of project data.
 * @returns {JSX.Element} - Project component JSX.
 */
const Project = ({ selectedTab, projectsData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [projectsData]);

    return (
        <motion.div
            key={selectedTab ? selectedTab.id : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                alt={selectedTab.title}
                src={selectedTab.imageUrls[currentImageIndex] || selectedTab.imageUrls[0]}
                style={{
                    minHeight: '0',
                    height: '100%',
                    minWidth: '0',
                    width: '100%',
                    maxWidth: '100%',
                    borderRadius: '10px',
                    position: 'relative',
                    opacity: isHovered ? 0.02 : 1,
                }}
            />
            {isHovered && (
                <Box style={{ position: 'absolute', width: '70%' }}>
                    <Typography
                        color={'#FFF'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                        mb={2}
                        sx={{
                            fontSize: { xs: '8px', sm: '14px', md: '20px' },
                        }}
                    >
                        {selectedTab.title}
                    </Typography>
                    <Typography
                        color={'#FFF'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                        variant="body2"
                        sx={{ fontSize: { xs: '6px', sm: '14px' } }}
                    >
                        {selectedTab.role}
                    </Typography>
                    <Typography
                        color={'#FFF'}
                        variant="body2"
                        textAlign={'center'}
                        mb={2}
                        sx={{ fontSize: { xs: '6px', sm: '14px' } }}
                    >
                        {selectedTab.description}
                    </Typography>
                    <Box sx={{ marginTop: 'auto', textAlign: 'center' }}>
                        {selectedTab.demoLink ? (
                            <Button
                                href={selectedTab.demoLink}
                                variant="contained"
                                target="_blank"
                                sx={{
                                    fontSize: { xs: '8px', sm: '14px' },
                                    backgroundColor: '#65f9af',
                                    color: '#327C57',
                                }}
                            >
                                Demo
                            </Button>
                        ) : (
                            <Typography
                                variant="body2"
                                color={'#FFF'}
                                textAlign={'center'}
                                mb={2}
                                sx={{ fontSize: { xs: '6px', sm: '14px' } }}
                            >
                                Demo Not Available
                            </Typography>
                        )}
                    </Box>
                </Box>
            )}
        </motion.div>
    );
};

export default Project;
