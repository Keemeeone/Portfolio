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
                backgroundColor: "#60676B",
                transformOrigin: "0%",
            }}
        />
    );
};

export default Motion;
