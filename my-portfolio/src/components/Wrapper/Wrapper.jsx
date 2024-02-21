// Wrapper.jsx
import React, {useRef} from "react";
import Scroll from './Scroll';

import Intro from "../Home/Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Main from "./Main";
import { ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = () => {
    const projectRef = useRef();

  return (
    <ParallaxProvider>
      <Main>
        <Scroll components={[
          <Intro />,
          <Skill />,
          <Project ref={projectRef} />, 
          <Resume />,
          <Contact />,
        ]} />
      </Main>
    </ParallaxProvider>
  );
};

export default Wrapper;
