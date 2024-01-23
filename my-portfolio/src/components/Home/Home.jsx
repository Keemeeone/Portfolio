import React from "react";
import Slides from './Slides';

import Intro from "../Intro";
import Skill from "../Skills/Skill";
import Resume from "../Resume";
import Project from "../Project";
import Contact from "../Contact";
import Footer from "../Footer";
import Main from "../Main";

const Home = () => {
    return (
        <>
            <Main>
            <Slides components={[
                <Intro />,
                <Skill />,
                <Project />,
                <Resume />,
                <Contact />,
            ]} />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
