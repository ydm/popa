import React from "react";

import "./Body.css";
import { Post } from "./types";

type Props = {
    entries: Post[];
};

const Body: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    const xs = props.entries.map(
        (entry: Post, index: number, _array: Post[]): JSX.Element => {
            return (
                <div className="border rounded mb-2 p-2 x-item" key={index}>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <div className="d-flex pe-3">
                                    <img
                                        alt="TODO"
                                        className="rounded-circle"
                                        src="img/pepe.png"
                                        width="40px"
                                        height="40px"
                                    />
                                </div>
                                <div className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <div className="row">
                                        <div className="col">
                                            <span className="fw-bolder">
                                                {entry.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <span className="font-italic fs-6">
                                                {entry.created}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">{entry.html}</div>
                    </div>
                </div>
            );
        }
    );
    return <div className="container">{xs}</div>;
};

export default Body;
