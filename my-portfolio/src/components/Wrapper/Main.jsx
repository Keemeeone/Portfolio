// Main.jsx
/*
SPDX-License-Identifier: MIT
*/
// Importing necessary libraries and components
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

/**
 * Main component representing the main content area.
 * @param {Object} props - Props for the Main component.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the main content area.
 * @returns {JSX.Element} - JSX element representing the main content area.
 */
const Main = ({ children }) => {
    // Callback function for initializing particles engine
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    // Callback function for handling particles loaded event
    const particlesLoaded = useCallback(async container => {
        await console.log("container", container);
    }, []);

    // Render the main content area with particles background
    return (
        <main id="main" role="main" style={{ backgroundColor: '#0A1811' }}>
            {/* Render particles background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // Particle animation options
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    // Particle appearance options
                    particles: {
                        color: {
                            value: "#65f9af",
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 2000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/* Render children components */}
            {children}
        </main>
    );
};

export default Main;
