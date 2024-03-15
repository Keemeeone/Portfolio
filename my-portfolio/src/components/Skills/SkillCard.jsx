// SkillCard.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React, { useState } from 'react';
import { Box } from '@mui/material';

/**
 * Functional component representing a skill card with interactive animation.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.skill - Skill object containing name and image information.
 * @returns {JSX.Element} - SkillCard component JSX.
 */
const SkillCard = ({ skill }) => {
    // State for tracking hover state
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Event handler for mouse move over the skill card.
     * Updates the position of the interactive circle based on mouse position.
     *
     * @param {MouseEvent} e - Mouse move event object.
     */
    const handleMouseMove = () => {
        setIsHovered(true)
    };

    // Event handler for mouse leave from the skill card
    const handleMouseLeave = () => {
        setIsHovered(false)
    };

    // Render the SkillCard component with interactive animation
    return (
        <>
            {/* Container for the skill card */}
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    marginBottom: '5vh'
                }}
                onTouchStart={handleMouseMove}
                onTouchEnd={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Image representing the skill */}
                <img
                    alt={skill.name}
                    style={{
                        maxWidth: '150%',
                        height: '8vh',
                        objectFit: 'cover',
                        animation: isHovered ? 'moveHorizontal 1.5s ease-in-out' : '',
                    }}
                    src={skill.image}
                />
                {/* Interactive circle for the skill */}
                <Box
                    style={{
                        position: 'absolute',
                        marginTop: '-1rem',
                        animation: isHovered ? 'textHorizontal 1.5s ease-in-out' : '',
                        transition: 'visibility 0.3s ease-in-out 0.5s',
                        visibility: isHovered ? 'visible' : 'hidden'
                    }}
                >
                    <Box
                        style={{
                            width: '6rem',
                            height: '6rem',
                            backgroundColor: '#1bf689',
                            borderRadius: '50%',
                        }}
                    ></Box>
                    {/* Text displaying the skill name */}
                    <Box
                        style={{
                            marginTop: '-60%',
                            color: '#143123',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        {skill.name}
                    </Box>
                </Box>
            </Box>

            {/* CSS animation for interactive elements */}
            <style>
                {`
                    @keyframes moveHorizontal {
                        100% {
                            transform: rotateY(360deg) perspective(1000px);
                        }
                    }
                `}
                {`
                    @keyframes textHorizontal {
                        100% {
                            transform: rotateY(360deg) perspective(1000px);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default SkillCard;
