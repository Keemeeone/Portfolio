import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
    Container,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
    responsiveFontSizes,
    ThemeProvider,
    Button,
} from "@mui/material";

const Single = ({ project }) => {
    const theme = useTheme();

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
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const ref = useRef(0);

    const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <Container id="intro" sx={{ display: "flex", flexDirection: "column", overflow: 'hidden', width: '100%', height: '100vh' }} >
            <Box style={{ width: '100%', scrollSnapType: 'y', scrollBehavior: 'smooth' }}>
                <Box key={project.id} style={{ scrollSnapAlign: 'center', position: "relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* <section style={{height:'100%', scrollSnapAlign:'center'}}> */}
                    <motion.div ref={ref} style={{ y }}>
                        <img
                            alt={project.title}
                            src={
                                project.imageUrls[currentImageIndex] ||
                                project.imageUrls[0]
                            }
                            style={{
                                minHeight: "0",
                                // height: "100%",
                                minWidth: "0",
                                // width: "100%",
                                maxHeight: "50vh",
                                maxWidth: "80%",
                                border: "1px solid #65f9af",
                                borderRadius: "10px",
                                position: "relative",
                                opacity: isHovered ? 0.1 : 1,
                            }}
                        />
                    </motion.div>
                    {isHovered &&
                        <Box
                            sx={{
                                textAlign: "center",
                                position: "absolute",
                                // maxWidth: "70%",
                                // top: "50%",
                                // left: "50%",
                                // transform: "translate(-50%, -50%)",
                                // transition: "opacity 0.3s ease-in-out",
                            }}
                        >
                            <Typography
                                color={'#FFF'}
                                fontWeight={"bold"}
                                textAlign={"center"}
                                mb={2}
                                sx={{ fontSize: { xs: "8px", sm: "14px", md: "20px" } }}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                color={'#FFF'}
                                fontWeight={"bold"}
                                textAlign={"center"}
                                variant="body2"
                                sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                            >
                                {project.role}
                            </Typography>
                            <Typography
                                color={'#FFF'}
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
                                        sx={{ fontSize: { xs: "8px", sm: "14px" }, backgroundColor: '#65f9af', color: '#327C57' }}
                                    >
                                        Demo
                                    </Button>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        color={'#FFF'}
                                        textAlign={"center"}
                                        mb={2}
                                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                    >
                                        Demo Not Available
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>

        </Container >
    );
};

export default Single;