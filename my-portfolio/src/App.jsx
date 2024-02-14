// App.jsx
/*
SPDX-FileCopyrightText: © 2024 Heewon Kim <khw0285@gmail.com>
SPDX-License-Identifier: MIT
*/

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from './components/Wrapper/Wrapper'

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wrapper />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;