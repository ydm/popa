import React from "react";

import { Entry } from "./types";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";
import ReplyWidget from "./ReplyWidget";

import "./PostWidget.css";

type Props = {
    post: Entry;
};

const PostWidget: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    const replies = props.post.replies.map(
        (reply: Entry, index: number, _array: Entry[]): JSX.Element => {
            return <ReplyWidget key={index} reply={reply} />;
        }
    );

    return (
        <div className="border rounded mb-2 p-2 x-post-widget">
            <PostHeader post={props.post} />
            <PostBody post={props.post} />
            <div>
                {replies}
            </div>
        </div>
    );
};

export default PostWidget;
