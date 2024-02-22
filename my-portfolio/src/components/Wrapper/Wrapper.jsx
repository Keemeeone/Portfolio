// Wrapper.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import Scroll from './Scroll';

import Intro from "../Home/Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";
import Main from "./Main";

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 */
const Wrapper = () => {
    return (
        <>
            <Main>
            <Scroll components={[
                <Intro />,
                <Skill />,
                <Projects />,
                <Resume />,
                <Contact />,
            ]} /> 
            </Main>
        </>
    );
};

export default Wrapper;
