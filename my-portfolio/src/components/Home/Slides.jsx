import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";

const Scroll = ({ components }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollRef = useRef();

    const handleScroll = () => {
        const scrollTop = scrollRef.current.scrollTop;
        const componentHeight = scrollRef.current.clientHeight;

        const newIndex = Math.floor(scrollTop / componentHeight);
        setActiveIndex(newIndex);

        // 스크롤 위치 업데이트
        setScrollPosition(scrollTop);
    };

    useEffect(() => {
        const handleResize = () => {
            const componentHeight = scrollRef.current.clientHeight;
            const newIndex = Math.floor(scrollRef.current.scrollTop / componentHeight);
            setActiveIndex(newIndex);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToComponent = (index) => {
        const componentHeight = scrollRef.current.clientHeight;
        scrollRef.current.scrollTo({
            top: index * componentHeight,
            behavior: "smooth",
        });
    };

    const updateSlideState = (index) => {
        scrollToComponent(index);
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
                currIdx={activeIndex}
                clickHandler={updateSlideState}
            />
            {components.map((component, index) => (
                <div key={index} style={{ height: "100vh" }}>
                    {React.cloneElement(component, { isActive: index === activeIndex, scrollPosition })}
                </div>
            ))}
        </div>
    );
};

export default Scroll;
