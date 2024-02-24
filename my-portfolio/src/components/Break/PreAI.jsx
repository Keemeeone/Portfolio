// PreSkill.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import { useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";
import { Typography, useTheme, useMediaQuery } from "@mui/material";

/**
 * ParallaxText component for displaying text and img with parallax effect.
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - Text content to be displayed.
 * @param {number} [props.baseVelocity=100] - Base velocity for parallax effect.
 * @param {number} props.scrollPosition - Current scroll position for parallax calculation.
 * @param {string} [props.img] - Image source URL.
 * @returns {JSX.Element} - ParallaxText component JSX.
 */
function ParallaxText({ children, baseVelocity = 100, scrollPosition, img }) {
    const baseX = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

    useEffect(() => {
        const updateX = () => {
            baseX.set((scrollPosition / 1400) * baseVelocity);
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
            {img ? (
                <motion.div style={{ x: x }}>
                    <img src={img} alt="Parallax" style={{ width: isSmallScreen? '40%': '70%', height: 'auto' }} />
                </motion.div>
            ) : (
                <motion.div style={{ x: x, width: '100%' }}>
                    <Typography color={'#FFF'} fontWeight={"bold"} variant="h1" style={{ fontSize: isSmallScreen ? "2em" : "5.5rem", textAlign: "center" }}>
                        {children}
                    </Typography>
                </motion.div>
            )}
        </div>
    );
}

/**
 * PreAI component displaying parallax text sections.
 *
 * @param {Object} props - Component properties.
 * @param {number} props.scrollPosition - Current scroll position for parallax calculation.
 * @returns {JSX.Element} - ProSkill component JSX.
 */
export default function PreAI({ scrollPosition }) {
    return (
        <section style={{}}>
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={-10}>BEFORE START</ParallaxText>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}}>

            <ParallaxText scrollPosition={scrollPosition} baseVelocity={0}>CHAT WITH</ParallaxText>
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={40} img="./robot.png?as=webp" />


            </div>
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={10}>HEEWON'S AI</ParallaxText>
        </section>
    );
}
