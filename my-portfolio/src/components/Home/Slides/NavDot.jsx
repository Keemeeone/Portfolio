import React, { useMemo } from 'react';
import { Box } from '@mui/material';

/**
 * Functional component representing a navigation circle in the Slide's NavBar.
 * Enables quick navigation within the Slide component.
 * 
 * @param {Object} props - Properties passed from the parent component.
 * @param {boolean} props.isCurrent - Indicates whether the circle is the current one.
 * @param {number} props.thisIdx - Index of the circle.
 * @param {function} props.clickHandler - Function to handle click events.
 * @returns {React.ReactElement} - Renders a circular navigation element.
 */
const NavDot = ({ isCurrent, thisIdx, clickHandler }) => {
  /**
   * Memoized style object for the circle.
   */
  const style = useMemo(() => ({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: isCurrent ? '#333' : '#ccc',
    cursor: 'pointer',
  }), [isCurrent]);

  return (
    <Box
      sx={style}
      onClick={clickHandler}
      role="button"
      aria-label={`Navigate to slide ${thisIdx + 1}`}
    />
  );
};

export default React.memo(NavDot);
