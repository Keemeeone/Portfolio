// SkillCard.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import { Card, CardContent, Typography, useTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

/**
 * SkillCard component displaying a skill card with interactive animations.
 * @param {Object} props - Props for the SkillCard component.
 * @param {string} props.skill - The skill to be displayed on the card.
 */
const SkillCard = ({ skill }) => {
    const theme = useTheme();
    const responsiveTheme = responsiveFontSizes(theme);

    const domTarget = useRef(null);

    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale, color }, api] = useSpring(() => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        color: getRandomColor(),
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const [, wheelApi] = useSpring(() => ({ wheelY: 0 }));

    useGesture(
        {
            onDrag: ({ active, offset: [x, y] }) =>
                api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
            onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y] }) => {
                wheelApi.set({ wheelY: y });
            },
        },
        { domTarget, eventOptions: { passive: false } }
    );

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);
        document.addEventListener("gesturechange", preventDefault);
        const colorChangeInterval = setInterval(() => {
            api.start({ color: getRandomColor() });
        }, 3000); // 3초마다 색상 변경

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            document.removeEventListener("gesturechange", preventDefault);
            clearInterval(colorChangeInterval);
        };
    }, [api]);

    return (
        <ThemeProvider theme={responsiveTheme}>
            <animated.div
                ref={domTarget}
                style={{
                    transform: "perspective(150px)",
                    x,
                    y,
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ,
                    backgroundColor: color,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    cursor: "grab",
                    userSelect: "none",
                    touchAction: 'none'
                }}
            >
                <Card variant="outlined" sx={{ width: '85%', height: '100%' }}>
                    <CardContent>
                        <Typography fontWeight={"bold"} sx={{ marginLeft: { xs: '-15px', sm: '-5px', md: 'px' }, fontSize: { xs: '8px', sm: '8px', md: '16px' } }}>
                            {skill}
                        </Typography>
                    </CardContent>
                </Card>
            </animated.div>
        </ThemeProvider>
    );
};

export default SkillCard;

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};