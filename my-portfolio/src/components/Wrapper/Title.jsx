import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Typography } from "@mui/material";


const TEXTS = ['','Forest', 'Building', 'Tree', 'Color'];

const Title = ({ activeIndex }) => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      setIndex(activeIndex);
    }, [activeIndex]);

  return (
    <Typography color={'#FFF'} fontWeight={"bold"} variant="h2" mb={5} style={{ fontSize: "3em", textAlign: "center" }}>
        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </Typography>
  );
};

export default Title;