// Motion.jsx
import React from "react";
import { motion } from "framer-motion";

const Motion = ({ scrollPosition, scrollHeight, clientHeight }) => {
    const calculateScaleX = () => {
        return scrollPosition / (scrollHeight - clientHeight);
    };

    return (
        <motion.div
            style={{
                scaleX: calculateScaleX(),
                position:'fixed',
                top: '4rem',
                left: 0,
                right: 0,
                height: "0.5vh",
                backgroundColor: "#65f9af",
                transformOrigin: "0%",
                zIndex:2,
            }}
        />
    );
};

export default Motion;
