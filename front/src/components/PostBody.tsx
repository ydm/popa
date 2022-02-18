import React from "react";
import ReactMarkdown from "react-markdown";

import { Entry } from "./types";

type Props = {
    post: Entry;
};

const PostBody: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    return (
        <div className="row x-post-body">
            <div className="col mt-3 mr-3">
                <ReactMarkdown>{props.post.body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default PostBody;
