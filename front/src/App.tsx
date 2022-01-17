import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "./components/Head";

import { Empty } from "./definitions";

import HomeScreen from "./screens/HomeScreen";
import RulesScreen from "./screens/RulesScreen";

const App: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="rules" element={<RulesScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
