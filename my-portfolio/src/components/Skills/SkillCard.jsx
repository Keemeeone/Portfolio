// SkillCard.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState } from 'react';
import { Box } from '@mui/system';

/**
 * Functional component representing a skill card with interactive animation.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.skill - Skill object containing name and image information.
 * @returns {JSX.Element} - SkillCard component JSX.
 */
const SkillCard = ({ skill }) => {
    // const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Event handler for mouse move over the skill card.
     * Updates the position of the interactive circle based on mouse position.
     *
     * @param {MouseEvent} e - Mouse move event object.
     */
    const handleMouseMove = () => {
        // const boundingBox = e.currentTarget.getBoundingClientRect();
        // const mouseX = e.clientX - boundingBox.left - boundingBox.width / 4;
        // const mouseY = e.clientY - boundingBox.top - boundingBox.height;

        // setCirclePosition({ x: mouseX, y: mouseY });
        setIsHovered(true)
    };

    const handleMouseLeave = () => {
        setIsHovered(false)
    };

    return (
        <>
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
                <img
                    alt={skill.name}
                    style={{
                        maxWidth: '150%',
                        height: '8vh',
                        objectFit: 'cover',
                        animation: isHovered ? 'moveHorizontal 1.5s ease-in-out' : '',
                        // zIndex: 1
                    }}
                    src={skill.image}
                />
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
                            // opacity: '0.5',
                            zIndex: 0,
                        }}
                    >

                    </Box>
                    <Box
                        style={{
                            marginTop: '-60%',
                            color: '#143123',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            // opacity:'2',
                            zIndex: 3,
                        }}
                    >
                        {skill.name}
                    </Box>
                </Box>
            </Box>

            <style>
                {`
                    @keyframes moveHorizontal {
                        // 0% {
                        //     transform: rotateY(180deg) perspective(1000px);
                        // }
                        // // 50% {
                        // //     transform: rotateY(180deg) perspective(100px);
                        // // }
                        100% {
                            transform: rotateY(360deg) perspective(1000px);
                        }
                    }
                `}
                {`
                    @keyframes textHorizontal {
                        // 0% {
                        //     transform: rotateY(180deg) perspective(1000px);
                        // }
                        // // 50% {
                        // //     transform: rotateY(180deg) perspective(100px);
                        // // }
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
