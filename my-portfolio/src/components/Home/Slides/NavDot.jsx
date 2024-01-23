import React, { useMemo } from 'react';
import { Box } from '@mui/material';

/**
 * Functional component for a circle in Slide's NavBar.
 * Supports quick navigation for the Slide component.
 * 
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 * 
 * @param {Object} props - Properties passed from the parent component.
 * @param {boolean} props.isCurrent - Indicates if the circle is the current one.
 * @param {number} props.thisIdx - Index of the circle.
 * @param {function} props.clickHandler - Click handler function.
 * @return {React.ReactElement} - Renders a circle for navigation.
 */
const NavBarCircle = ({ isCurrent, thisIdx, clickHandler }) => {
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

export default React.memo(NavBarCircle);
