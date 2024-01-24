import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import NavDot from './NavDot';
 
/**
 * Functional component for Slide's NavBar.
 * 
 * @param {Object} props - Properties passed from the parent component.
 * @param {string} props.orientation - Orientation of the NavBar ('vertical' or 'horizontal').
 * @param {number} props.length - Number of circles in the NavBar.
 * @param {number} props.currIdx - Index of the current circle.
 * @param {function} props.clickHandler - Click handler function.
 * @return {React.ReactElement} - Renders NavBar for scroll.
 */
const NavBar = ({ orientation, length, currIdx, clickHandler }) => {
    const style = useMemo(() => ({
        position: 'fixed',
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transform: orientation === 'vertical' ? 'translateY(-50%)' : 'translateX(-50%)',
        zIndex: 1000,
    }), [orientation]);

    // Conditional rendering based on the orientation prop
    return (
        <Box
            top={orientation === 'vertical' ? '50%' : undefined}
            right={orientation === 'vertical' ? '0' : undefined}
            bottom={orientation === 'vertical' ? undefined : '10px'}
            left={orientation === 'vertical' ? undefined : '50%'}
            marginRight={orientation === 'vertical' ? '10px' : undefined}
            marginBottom={orientation === 'vertical' ? undefined : '10px'}
            sx={style}
        >
            {Array.from(Array(length)).map((_value, idx) => (
                <NavDot
                    key={idx}
                    isCurrent={currIdx === idx}
                    thisIdx={idx}
                    clickHandler={() => clickHandler(idx)}
                />
            ))}
        </Box>
    );
};

export default React.memo(NavBar);
