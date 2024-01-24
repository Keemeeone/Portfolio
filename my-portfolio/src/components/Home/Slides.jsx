import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Slide, useMediaQuery, useTheme } from '@mui/material';
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
        setSlideState(prevState => ({
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

    const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
    console.log(isSmallScreen)

    const scrollTimeout = useRef(null);
    const acceptScroll = useRef(true);
    let deltaY = 0;
    let prevY = -1;
    let deltaX = 0;
    let prevX = -1;

    const resetScroll = () => {
        scrollTimeout.current = undefined;
        acceptScroll.current = true;
        deltaY = 0;
        deltaX = 0;
    };

    const handleScrollTimeout = () => {
        if ((deltaY > 50 && slideState.currentIdx < components.length - 1) || (deltaX > 50 && slideState.currentIdx < components.length - 1)) {
            updateSlideState(slideState.currentIdx + 1);
            console.log(deltaY)
        } else if ((deltaY < -50 && slideState.currentIdx > 0) || (deltaX < -50 && slideState.currentIdx > 0)) {
            updateSlideState(slideState.currentIdx - 1);

            console.log(deltaY)
        }

        window.setTimeout(resetScroll, 40);
    };

    const handleScrollEvent = (e) => {

        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = window.setTimeout(handleScrollTimeout, 40);

        if (e.type === 'wheel') {
            if (!isSmallScreen) {
                deltaY += e.deltaY;
            } else {
                deltaX += e.deltaX;
            }
        } else {
            if (!isSmallScreen) {
                const y = e.targetTouches[0].clientY;
                if (prevY !== -1) {
                    deltaY += prevY - y;
                }
                prevY = y;
            } else {
                const x = e.targetTouches[0].clientX;
                if (prevX !== -1) {
                    deltaX += prevX - x;
                }
                prevX = x;
            }

        }


    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        position: 'fixed',
    };

    const containerStyle = {
        overflowY: 'hidden',
    };


    return (
        <Box
            ref={containerRef}
            sx={{ overscrollBehavior: 'none', ...containerStyle }}
            onWheel={handleScrollEvent}
            onTouchMove={handleScrollEvent}
        >
            <Header
                orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                length={components.length}
                currIdx={slideState.currentIdx}
                clickHandler={updateSlideState}
            />
            <NavBar
                orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                length={components.length}
                currIdx={slideState.currentIdx}
                clickHandler={updateSlideState}
            />

            <Slide direction={isSmallScreen ? 'left' : 'up'} in={!slideState.isSwitching} timeout={transSpeed}>
                <Box sx={{ ...slideStyle, zIndex: 2 }}>
                    {components[slideState.currentIdx]}
                </Box>
            </Slide>
        </Box>
    );
};

export default Slides;
