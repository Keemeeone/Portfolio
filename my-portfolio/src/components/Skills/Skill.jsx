import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import SkillCard from "./SkillCard";
import { Container, Typography, Grid, useTheme, useMediaQuery, responsiveFontSizes, ThemeProvider } from "@mui/material";

const skillsData = [
    { category: "Language", skills: ["JavaScript", "Java", "C", "Python", "TypeScript", "R"] },
    { category: "Markup", skills: ["HTML5", "CSS3"] },
    { category: "Data", skills: ["MySQL", "JSON"] },
    { category: "Framework", skills: ["React", "React-Native", "FastAPI", "Node.js"] },
    { category: "Tool", skills: ["Postman", "Git", "Github", "Linux", "Jira"] },
    { category: "Design", skills: ["Figma"] },
];

const Skill = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const responsiveTheme = responsiveFontSizes(theme);

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
                threshold: 0.9,
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
        }, 150); // 200ms 디바운스 지연 시간

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [set, domTarget]);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <animated.div
                ref={domTarget}
                style={{
                    opacity: springProps.opacity,
                    transition: "opacity 0.5s ease",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <Typography fontWeight={"bold"} variant="h2" mb={3} style={{ fontSize: isSmallScreen ? "1em" : "3em", textAlign: "center" }}>
                        Skills
                    </Typography>

                    <Grid container spacing={1}>
                        {skillsData.map((category, index) => (
                            <Grid item key={index} xs={4} sm={6} md={4}>
                                <Typography color={"GrayText"} mb={2} textAlign={"center"} sx={{ fontSize: { xs: '12px', sm: '14px', md: '20px' } }}>
                                    {category.category}
                                </Typography>
                                <Grid container spacing={1}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <Grid item key={skillIndex} xs={6} sm={4} md={6}>
                                            <SkillCard skill={skill} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </animated.div>
        </ThemeProvider>
    );
};

export default Skill;
