import React, { useState } from 'react';

const SkillCard = ({ skill }) => {
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const boundingBox = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - boundingBox.left - boundingBox.width / 4;
        const mouseY = e.clientY - boundingBox.top - boundingBox.height;

        setCirclePosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
        setCirclePosition({ x: 0, y: 0 });
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    alt={skill.name}
                    style={{
                        maxWidth: '150%',
                        height: '8vh',
                        objectFit: 'cover',
                        animation: 'moveHorizontal 5s ease-in-out infinite',
                        zIndex: 1
                    }}
                    src={skill.image}
                />
                {circlePosition.x !== 0 && (
                    <div
                        style={{
                            position: 'absolute',
                            left: circlePosition.x,
                            top: circlePosition.y,
                            transform: `translate(-50%, -50%)`,
                        }}
                    >
                        <div
                            style={{
                                width: '10rem',
                                height: '10rem',
                                backgroundColor: '#f9af65',
                                borderRadius: '50%',
                                opacity: '0.5',
                                zIndex: 0,
                            }}
                        >

                        </div>
                        <div
                            style={{
                                marginTop: '-55%',
                                color: '#FFF',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                // opacity:'2',
                                zIndex: 3,
                            }}
                        >
                            {skill.name}
                        </div>
                    </div>
                )}
            </div>

            <style>
                {`
                    @keyframes moveHorizontal {
                        0% {
                            transform: translateX(0vw);
                        }
                        50% {
                            transform: translateX(50%);
                        }
                        100% {
                            transform: translateX(0vw);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default SkillCard;
