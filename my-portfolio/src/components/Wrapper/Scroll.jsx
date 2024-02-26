// Scroll.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React, { useState, useRef } from "react";

import Header from "../Header/Header";
import Motion from "./Motion";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

/**
 * Scroll component handling vertical scrolling and displaying a Header.
 * @param {Object} props - Props for the Scroll component.
 * @param {React.Component[]} props.components - Array of React components to be displayed.
 */
const Scroll = ({ components }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollRef = useRef();

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (scrollRef.current) {
    //             const componentHeight = scrollRef.current.clientHeight;
    //             const newIndex = Math.floor(scrollRef.current.scrollTop / componentHeight);
    //             setActiveIndex(newIndex);
    //         }
    //     };

    //     if (scrollRef.current) {
    //         window.addEventListener("resize", handleResize);

    //         return () => {
    //             window.removeEventListener("resize", handleResize);
    //         };
    //     }
    // }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollTop = scrollRef.current.scrollTop;
            const componentHeight = scrollRef.current.clientHeight;

            const newIndex = scrollTop / componentHeight;
            setActiveIndex(newIndex);

            // 스크롤 위치 업데이트
            setScrollPosition(scrollTop);
        }
    };

    const calculateOpacity = (index) => {
        if (scrollRef.current) {
            const componentHeight = scrollRef.current.clientHeight;
            const distanceToComponent = Math.abs(scrollPosition - index * componentHeight);
            const maxDistance = componentHeight * 0.6;

            // Calculate opacity based on the distance to the component
            const opacity = 1 - Math.min(distanceToComponent / maxDistance, 1);

            return opacity;
        }

        // Default opacity if scrollRef.current is undefined
        return 1;
    };

    const scrollToComponent = (index) => {
        if (scrollRef.current) {
            const componentHeight = scrollRef.current.clientHeight;
            scrollRef.current.scrollTo({
                top: index * componentHeight,
                behavior: "smooth",
            });
        }
    };

    const updateSlideState = (index) => {
        scrollToComponent(index);
    };

    const moveToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
                height: "100vh",
                overflowY: "scroll",
                scrollBehavior: "smooth",
            }}
        >
            <Header
                orientation={'vertical'}
                length={components.length}
                clickHandler={updateSlideState}
            />
            {scrollPosition !== 0 && (
                <Motion
                    scrollPosition={scrollPosition}
                    scrollHeight={scrollRef.current?.scrollHeight}
                    clientHeight={scrollRef.current?.clientHeight}
                />
            )}

            {components.map((component, index) => (
                <div
                    key={index}
                    style={{
                        height: "100vh",
                        opacity: calculateOpacity(index),
                        transition: "opacity 0.2s ease-in-out",
                    }}
                >
                    {React.cloneElement(component, { isActive: index === activeIndex, scrollPosition, activeIndex })}
                </div>
            ))}
            <style>
                {`
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            50% {
                                transform: translateY(10px);
                            }
                            100% {
                                transform: translateY(0px);
                            }
                        }
                    `}
            </style>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    zIndex: 1,
                    color: "#FFF",
                    animation: "bounce 2s infinite",
                    overflow:'hidden'
                }}
                onClick={moveToTop}
            >
                <ArrowCircleUpIcon sx={{ fontSize: {xs:25, md:30} }}/>
            </div>
        </div>
    );
};

export default Scroll;