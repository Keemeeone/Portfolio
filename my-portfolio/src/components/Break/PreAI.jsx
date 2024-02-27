// PreAI.jsx
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
    const baseY = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);
    const y = useTransform(baseY, (v) => `${wrap(0, 30, v)}%`);

    useEffect(() => {
        const updatePosition = () => {
            baseX.set((scrollPosition / 1000) * baseVelocity);
            baseY.set((scrollPosition / 1000) * baseVelocity);
        };

        updatePosition();

        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, [scrollPosition, baseVelocity, baseX, baseY]);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden', overflowY: 'hidden' }}>
            {img ? (
                <motion.div style={{ x: x, y: y }}>
                    <img src={img} alt="Parallax" style={{ width: '50%', height: 'auto' }} />
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
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={-10} img="./astronaut2.png?as=webp" />

            {/* <ParallaxText scrollPosition={scrollPosition} baseVelocity={-10}>BEFORE START</ParallaxText> */}

            <ParallaxText scrollPosition={scrollPosition} baseVelocity={0}>TALK WITH</ParallaxText>

            <ParallaxText scrollPosition={scrollPosition} baseVelocity={10}>HEEWON'S AI</ParallaxText>
        </section>
    );
}
