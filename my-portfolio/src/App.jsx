// Wrapper.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import Scroll from "./components/Wrapper/Scroll";

import Intro from "./components/Home/Home";
import PreSkill from "./components/Break/PreSkill";
import Skill from "./components/Skills/Skill";
import Resume from "./components/Resume/Resume";
import PreProject from "./components/Break/PreProject";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import AIchat from "./components/AIchat/AIchat";
import { useMediaQuery, useTheme } from "@mui/material";
import PreAI from "./components/Break/PreAI";
import Landing from "./components/Wrapper/Landing";
import Main from "./components/Wrapper/Main";

/**
 * Wrapper component containing the Main component and Scroll component with specified sections.
 */
const App = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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

export default App;
