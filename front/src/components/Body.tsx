import React from "react";
import PostWidget from "./PostWidget";

import { Post } from "./types";

type Props = {
    entries: Post[];
};

const Body: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    const xs = props.entries.map(
        (post: Post, index: number, _array: Post[]): JSX.Element => {
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
