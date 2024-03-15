// Motion.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React from "react";
import { motion } from "framer-motion";

/**
 * Motion component representing a visual element that scales horizontally based on scroll position.
 * @param {Object} props - Props for the Motion component.
 * @param {number} props.scrollPosition - The current scroll position.
 * @param {number} props.scrollHeight - The total height of the scrollable area.
 * @param {number} props.clientHeight - The height of the visible client area.
 * @returns {JSX.Element} - JSX element representing the motion component.
 */
const Motion = ({ scrollPosition, scrollHeight, clientHeight }) => {

    /**
     * Calculate the scaleX value based on the scroll position.
     * @returns {number} The calculated scaleX value.
     */
    const calculateScaleX = () => {
        return scrollPosition / (scrollHeight - clientHeight);
    };

    // Render the motion component with dynamic scaling based on scroll position
    return (
        <motion.div
            style={{
                // Dynamically adjust scaleX based on scroll position
                scaleX: calculateScaleX(),
                // Styling for the motion component
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: "0.5vh",
                backgroundColor: "#65f9af",
                transformOrigin: "0%",
            }}
        />
    );
};

export default Motion;
