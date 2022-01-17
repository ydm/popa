import React from "react";
import ReactMarkdown from "react-markdown";

import { Post } from "./types";

type PostBodyProps = {
    post: Post;
};

const PostBody: React.VFC<PostBodyProps> = (
    props: PostBodyProps,
    _context?: unknown
): React.ReactElement => {
    return (
        <div className="row">
            <div className="col mt-3 mx-3">
                <ReactMarkdown>{props.post.body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default PostBody;
