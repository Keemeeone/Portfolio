/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

const Project = ({ project,projectsData}) => {
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
        }, 2000);

        return () => clearInterval(intervalId);
    }, [projectsData]);
    return (
        <Box
            key={project.id}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                alt={project.title}
                src={
                    project.imageUrls[currentImageIndex] || project.imageUrls[0]
                }
                style={{
                    minHeight: "0",
                    height: "100%",
                    minWidth: "0",
                    width: "100%",
                    maxWidth: "80%",
                    border: "1px solid #65f9af",
                    borderRadius: "10px",
                    position: "relative",
                    opacity: isHovered ? 0.1 : 1,
                }}
            />
            {isHovered && (
                <Box
                    sx={{
                        textAlign: "center",
                        position: "absolute",
                        maxWidth: "70%",
                    }}
                >
                    <Typography
                        color={"#FFF"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        mb={2}
                        sx={{
                            fontSize: { xs: "8px", sm: "14px", md: "20px" },
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography
                        color={"#FFF"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        variant="body2"
                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                    >
                        {project.role}
                    </Typography>
                    <Typography
                        color={"#FFF"}
                        variant="body2"
                        textAlign={"center"}
                        mb={2}
                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                    >
                        {project.description}
                    </Typography>
                    <Box sx={{ marginTop: "auto", textAlign: "center" }}>
                        {project.demoLink ? (
                            <Button
                                href={project.demoLink}
                                variant="contained"
                                target="_blank"
                                sx={{
                                    fontSize: { xs: "8px", sm: "14px" },
                                    backgroundColor: "#65f9af",
                                    color: "#327C57",
                                }}
                            >
                                Demo
                            </Button>
                        ) : (
                            <Typography
                                variant="body2"
                                color={"#FFF"}
                                textAlign={"center"}
                                mb={2}
                                sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                            >
                                Demo Not Available
                            </Typography>
                        )}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Project;
