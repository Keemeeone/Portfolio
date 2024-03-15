// Scroll.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import Motion from "./Motion";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

/**
 * Scroll component handling vertical scrolling and displaying a Header.
 * @param {Object} props - Props for the Scroll component.
 * @param {React.Component[]} props.components - Array of React components to be displayed.
 * @returns {JSX.Element} - JSX element representing the scroll component.
 */
const Scroll = ({ components }) => {
    // State variables for managing scroll and header visibility
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true); // Add state for header visibility

    // Ref for accessing scroll container
    const scrollRef = useRef();

    // Function to handle scroll event
    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollTop = scrollRef.current.scrollTop;
            const componentHeight = scrollRef.current.clientHeight;

            // Calculate active index and update state variables
            const newIndex = scrollTop / componentHeight;
            setActiveIndex(newIndex);
            setScrollPosition(scrollTop);
            setHeaderVisible(scrollTop <= scrollPosition || scrollTop === 0);
        }
    };

    // Function to calculate opacity based on scroll position
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

    // Function to scroll to a specific component
    const scrollToComponent = (index) => {
        if (scrollRef.current) {
            const componentHeight = scrollRef.current.clientHeight;
            scrollRef.current.scrollTo({
                top: index * componentHeight,
                behavior: "smooth",
            });
        }
    };

    // Function to update slide state
    const updateSlideState = (index) => {
        scrollToComponent(index);
    };

    // Function to move to the top of the page
    const moveToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // Render the scroll component with header and children components
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
            {/* Render header component */}
            <Header
                orientation={'vertical'}
                length={components.length}
                clickHandler={updateSlideState}
                isVisible={headerVisible}
            />
            {/* Render motion component */}
            {scrollPosition !== 0 && (
                <Motion
                    scrollPosition={scrollPosition}
                    scrollHeight={scrollRef.current?.scrollHeight}
                    clientHeight={scrollRef.current?.clientHeight}
                />
            )}

            {/* Render children components */}
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
            {/* CSS styling for animation */}
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
            {/* Render button to move to top */}
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    zIndex: 1,
                    color: "#FFF",
                    animation: "bounce 2s infinite",
                    overflow: 'hidden'
                }}
                onClick={moveToTop}
            >
                <ArrowCircleUpIcon sx={{ fontSize: { xs: 25, md: 30 } }} />
            </div>
        </div>
    );
};

export default Scroll;
