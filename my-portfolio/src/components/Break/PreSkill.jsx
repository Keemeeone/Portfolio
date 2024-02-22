import { useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";
import { Typography, useTheme, useMediaQuery } from "@mui/material";

function ParallaxText({ children, baseVelocity = 100, scrollPosition }) {
    const baseX = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

    useEffect(() => {
        const updateX = () => {
            baseX.set((scrollPosition/1000) * baseVelocity);
        };

        updateX();

        // Add scroll event listener
        window.addEventListener("scroll", updateX);

        return () => {
            // Remove scroll event listener on component unmount
            window.removeEventListener("scroll", updateX);
        };
    }, [scrollPosition, baseVelocity, baseX]);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',overflowX: 'hidden'  }}>
            <motion.div style={{ x: x, width: '100%' }}>
                <Typography color={'#FFF'} fontWeight={"bold"} variant="h1" style={{ fontSize: isSmallScreen ? "3em" : "5.5rem", textAlign: "center" }}>
                    {children}
                </Typography>
            </motion.div>
        </div>
    );
}

export default function ProSkill({ scrollPosition, activeIndex }) {
    return (
        <section style={{paddingTop:'10rem'}}>
            <ParallaxText scrollPosition={scrollPosition} activeIndex={activeIndex} baseVelocity={-6}>LET'S</ParallaxText>
            <ParallaxText scrollPosition={scrollPosition} activeIndex={activeIndex} baseVelocity={6}>START!</ParallaxText>
        </section>
    );
}
