// Wrapper.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import Scroll from './Scroll';

import Intro from "../Home/Home";
import PreSkill from "../Break/PreSkill";
import Skill from "../Skills/Skill";
import Resume from "../Resume/Resume";
import PreProject from "../Break/PreProject";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";
import AIchat from "../AIchat/AIchat";
import { useMediaQuery, useTheme } from "@mui/material";
import PreAI from "../Break/PreAI";
import Landing from "./Landing";
import Main from "./Main";

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 */
const Wrapper = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Main>
                <Scroll components={
                    isSmallScreen ?
                        [<Intro />, 
                        <PreAI />, 
                        <AIchat />, 
                        <PreSkill />,
                        <Skill />,
                        <PreProject />,
                        <Projects />,
                        <Resume />,
                        <Contact />] :
                        [<Landing />,
                        <PreSkill />,
                        <Skill />,
                        <PreProject />,
                        <Projects />,
                        <Resume />,
                        <Contact />]
                } />
            </Main>
        </>
    );
};

export default Wrapper;
