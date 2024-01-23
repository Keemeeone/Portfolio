import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import { Card, CardContent, Typography } from "@mui/material";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const SkillCard = ({ skill }) => {
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
                event.preventDefault();
                wheelApi.set({ wheelY: y });
            },
        },
        { domTarget, eventOptions: { passive: false } }
    );

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);
        document.addEventListener("gesturechange", preventDefault);

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            document.removeEventListener("gesturechange", preventDefault);
        };
    }, []);

    return (
        <animated.div
            ref={domTarget}
            style={{
                transform: "perspective(600px)",
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
                backgroundColor: color,
            }}
        >
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="body1" fontWeight={"bold"} textAlign={"center"}>
                        {skill}
                    </Typography>
                </CardContent>
            </Card>
        </animated.div>
    );
};

export default SkillCard;
