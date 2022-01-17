import React from "react";
import { Empty } from "../definitions";
import BodyContainer from "../components/BodyContainer";

import "./HomeScreen.css";

const HomeScreen: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <a className="btn btn-secondary text-center mb-2 fw-bolder x-home-btn-new" href="/">Оплачи се и ти</a>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <BodyContainer />
        </>
    );
};

export default HomeScreen;
