import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Slide } from '@mui/material';
import NavBar from './Slides/NavBar';
import Header from '../Header/Header';

const Slides = (props) => {
    const { components } = props;
    const transSpeed = 500;

    const [slideState, setSlideState] = useState({
        currentIdx: 0,
        previousIdx: 0,
        isSwitching: false,
    });

    const containerRef = useRef(null);

    useEffect(() => {
        setSlideState((prevState) => ({
            ...prevState,
            currentIdx: 0,
            previousIdx: 0,
        }));
    }, [components]);

    const updateSlideState = useCallback(
        (newIdx) => {
            setSlideState((prevState) => ({
                ...prevState,
                previousIdx: prevState.currentIdx,
                isSwitching: true,
            }));

            window.setTimeout(() => {
                setSlideState((prevState) => ({
                    ...prevState,
                    isSwitching: false,
                    currentIdx: newIdx,
                }));
            }, transSpeed);
        },
        [transSpeed]
    );

    const scrollTimeout = useRef(null);
    const acceptScroll = useRef(true);
    const deltaY = useRef(0);

    const resetScroll = () => {
        scrollTimeout.current = undefined;
        acceptScroll.current = true;
        deltaY.current = 0;
    };

    const handleScrollTimeout = () => {
        if (deltaY.current > 50 && slideState.currentIdx < components.length - 1) {
            updateSlideState(slideState.currentIdx + 1);
        } else if (deltaY.current < -50 && slideState.currentIdx > 0) {
            updateSlideState(slideState.currentIdx - 1);
        }

        window.setTimeout(resetScroll, 40);
    };

    const handleScrollEvent = (e) => {
        if (acceptScroll.current) {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            scrollTimeout.current = window.setTimeout(handleScrollTimeout, 40);

            if (e.type === 'wheel') {
                deltaY.current += e.deltaY;
            } else {
                deltaY.current += e.targetTouches[0].clientY - (e.targetTouches[1]?.clientY || 0);
            }
        }
    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        position: 'fixed',
    };

    return (
        <Box
            ref={containerRef}
            sx={{ overscrollBehavior: 'none' }}
            onWheel={handleScrollEvent}
            onTouchMove={handleScrollEvent}
        >
            <Header orientation="vertical"
                length={components.length}
                currIdx={slideState.currentIdx}
                clickHandler={updateSlideState}
            />
            <NavBar
                orientation="vertical"
                length={components.length}
                currIdx={slideState.currentIdx}
                clickHandler={updateSlideState}
            />

            <Slide direction="up" in={!slideState.isSwitching} timeout={transSpeed}>
                <Box sx={{ ...slideStyle, zIndex: 2 }}>
                    {components[slideState.currentIdx]}
                </Box>
            </Slide>
        </Box>
    );
};

export default Slides;