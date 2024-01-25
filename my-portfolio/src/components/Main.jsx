// Main.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";

/**
 * Main component representing the main content area.
 * @param {Object} props - Props for the Main component.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the main content area.
 */
const Main = ({ children }) => {
    return (
        <main id="main" role="main">
            {children}
        </main>
    );
};

export default Main;
