import React from "react";
import { Empty } from "./definitions";

import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";

const App: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    return (
        <>
            <Header />
            <BodyContainer />
        </>
    );
};

export default App;
