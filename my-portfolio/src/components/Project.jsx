import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
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
import Carousel from "react-material-ui-carousel";

const projectsData = [
    {
        title: "College Mate App",
        role: "Frontend Developer",
        description:
            "CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students. With CollegeMate, students can create and customize their schedules, download them as share class information them with friends within the app.",
        imageUrls: [
            "./CollegeMate1.png?as=webp",
            "./CollegeMate2.png?as=webp",
            "./CollegeMate3.png?as=webp",
        ],
        demoLink: "https://collegemate.app/",
    },
    {
        title: "Wisconsin SCO",
        role: "Backend Developer",
        description:
            "Simplify survey note retrieval by implementing an intuitive map-based interface, eliminating the need for specialized township knowledge and greatly enhancing user accessibility. \n *Demo cannot be provided because it is company's privacy",
        imageUrls: ["./SCOmap.png?as=webp", "./SCOgithub.png?as=webp"],
    },
    {
        title: "Portfolio",
        role: "Web Developer",
        description:
            "Explore a showcase of my diverse skills and projects in this comprehensive portfolio. From web development to creative design, discover the breadth of my expertise. Click to see my work in action! 👩‍💻🚀 #Portfolio #WebDev #Design",
        imageUrls: [
            "./portfolio1.png?as=webp",
            "./portfolio2.png?as=webp",
            "./portfolio3.png?as=webp",
            "./portfolio4.png?as=webp",
        ],
        demoLink: "https://github.com/Keemeeone/Portfolio/tree/main",
    },
];

const Project = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const domTarget = useRef(null);
    const [springProps, set] = useSpring(() => ({ opacity: 0 }));

    const debounce = (func, delay) => {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(() => {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.8,
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newOpacity = Math.min(1, Math.max(0, (window.innerHeight - entry.boundingClientRect.top) / (entry.boundingClientRect.height)));
                        set({ opacity: newOpacity });
                    } else {
                        set({ opacity: 0 });
                    }
                });
            }, options);

            if (domTarget.current) {
                observer.observe(domTarget.current);
            }
        }, 100); // 200ms 디바운스 지연 시간

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [set, domTarget]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <animated.div
                ref={domTarget}
                style={{
                    opacity: springProps.opacity,
                    transition: "opacity 0.3s ease",
                }}
            >
                <Container
                    sx={{

                        justifyContent: "center",
                    }}
                >
                    <Typography fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1em" : "3em", textAlign: "center" }}>
                        Projects
                    </Typography>

                    <Carousel
                        autoPlay={true}
                        animation="slide"
                        timeout={500}
                        navButtonsAlwaysVisible
                        indicators={false}
                        height={"80vh"}
                    >
                        {projectsData.map((project, index) => (
                            <Box key={index}>
                                <img
                                    alt={project.title}
                                    src={
                                        project.imageUrls[currentImageIndex] ||
                                        project.imageUrls[0]
                                    }
                                    style={{ minHeight: "0", height: "50vh", minWidth: "0", width: "100%" }}
                                />
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography
                                        fontWeight={"bold"}
                                        textAlign={"center"}
                                        mb={2}
                                        sx={{ fontSize: { xs: "8px", sm: "14px", md: "20px" } }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        fontWeight={"bold"}
                                        textAlign={"center"}
                                        variant="body2"
                                        color="textPrimary"
                                        mb={2}
                                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                    >
                                        {project.role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        textAlign={"center"}
                                        mb={2}
                                        sx={{ fontSize: { xs: "6px", sm: "14px" } }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ marginTop: "auto", textAlign: "center" }}>
                                        {project.demoLink && (
                                            <Button
                                                href={project.demoLink}
                                                variant="contained"
                                                color="primary"
                                                target="_blank"
                                                sx={{ fontSize: { xs: "8px", sm: "14px" } }}
                                            >
                                                Demo
                                            </Button>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                </Container>
            </animated.div>
        </ThemeProvider>
    );
};

export default Project;
