// Wrapper.jsx
import React, { useRef } from "react";
import Scroll from './Scroll';

import Intro from "../Home/Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Main from "./Main";

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 */
const Wrapper = () => {
    // Project 컴포넌트에 대한 Ref
    const projectRef = useRef(null);

    return (
        <>
            <Main>
                <Scroll components={[
                    <Intro />,
                    <Skill />,
                    <Project ref={projectRef} />,  // Project 컴포넌트에 Ref 전달
                    <Resume />,
                    <Contact />,
                ]} />
            </Main>
        </>
    );
};

export default Wrapper;
