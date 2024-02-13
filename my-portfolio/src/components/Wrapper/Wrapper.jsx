// Wrapper.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import Scroll from './Scroll';

import Intro from "../Home";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import Project from "../Project/Project";
import Contact from "../Contact";
import Main from "../Main";

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
                <Project />,
                <Resume />,
                <Contact />,
            ]} />
            </Main>
        </>
    );
};

export default Wrapper;
