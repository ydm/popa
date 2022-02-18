import React from "react";
import PostHeader from "./PostHeader";
import { Entry } from "./types";

import "./ReplyWidget.css";
import PostBody from "./PostBody";

type Props = {
    reply: Entry
}

const CommentWidget: React.VFC<Props> = (
    props: Props,
    _context?: unknown
): React.ReactElement => {
    return (
        <div className="x-reply-widget rounded-3 p-3 mx-3 mb-1">
            <PostHeader post={props.reply} />
            <PostBody post={props.reply} />
        </div>
    );
}

export default CommentWidget;