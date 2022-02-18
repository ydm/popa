import React from "react";
import PostWidget from "./PostWidget";
import { Entry } from "./types";

import "./Body.css";

type Props = {
    entries: Entry[];
};

const Body: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    const xs = props.entries.map(
        (post: Entry, index: number, _array: Entry[]): JSX.Element => {
            return <PostWidget key={index} post={post} />;
        }
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">{xs}</div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    );
};

export default Body;
