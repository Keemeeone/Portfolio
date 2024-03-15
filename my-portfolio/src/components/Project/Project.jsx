// Project.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

/**
 * Functional component representing a project display.
 * @param {Object} props - Component properties.
 * @param {Object} props.selectedTab - Currently selected tab with project details.
 * @param {Array} props.projectsData - Array of project data.
 * @returns {JSX.Element} - JSX element representing the Project component.
 */
const Project = ({ selectedTab, projectsData }) => {
    // State for tracking current image index and hover state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Event handler for mouse enter
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Event handler for mouse leave
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Effect for image transition
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [projectsData]);

    // Render the Project component with motion animations
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
            {/* Project image */}
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
                    opacity: isHovered ? 0.01 : 1,
                }}
            />
            {/* Hover details */}
            {isHovered && (
                <Box style={{ position: 'absolute', width: '70%', }}>
                    {/* Project title */}
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
                    {/* Project role */}
                    <Typography
                        color={'#FFF'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                        variant="body2"
                        sx={{ fontSize: { xs: '6px', sm: '14px' } }}
                    >
                        {selectedTab.role}
                    </Typography>
                    {/* Project description */}
                    <Typography
                        color={'#FFF'}
                        variant="body2"
                        textAlign={'center'}
                        mb={2}
                        sx={{ fontSize: { xs: '6px', sm: '14px' } }}
                    >
                        {selectedTab.description}
                    </Typography>
                    {/* Demo button or message */}
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
