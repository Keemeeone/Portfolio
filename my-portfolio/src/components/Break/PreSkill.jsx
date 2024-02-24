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
 * ParallaxText component for displaying text with parallax effect.
 *
 * @param {Object} props - Component properties.
 * @param {ReactNode} props.children - Text content to be displayed.
 * @param {number} [props.baseVelocity=100] - Base velocity for parallax effect.
 * @param {number} props.scrollPosition - Current scroll position for parallax calculation.
 * @returns {JSX.Element} - ParallaxText component JSX.
 */
function ParallaxText({ children, baseVelocity = 100, scrollPosition }) {
    const baseX = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${wrap(-50, 50, v)}%`);

    useEffect(() => {
        const updateX = () => {
            baseX.set((scrollPosition/1200) * baseVelocity);
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

/**
 * PreSkill component displaying parallax text sections.
 *
 * @param {Object} props - Component properties.
 * @param {number} props.scrollPosition - Current scroll position for parallax calculation.
 * @returns {JSX.Element} - ProSkill component JSX.
 */
export default function PreSkill({ scrollPosition }) {
    return (
        <section style={{paddingTop:'10rem'}}>
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={-6}>LET'S</ParallaxText>
            <ParallaxText scrollPosition={scrollPosition} baseVelocity={6}>START!</ParallaxText>
        </section>
    );
}
