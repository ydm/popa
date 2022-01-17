import React from "react";

import { Post } from "./types";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

import "./PostWidget.css";

type PostWidgetProps = {
    post: Post;
    avatar?: string;
};

const PostWidget: React.VFC<PostWidgetProps> = (
    props: PostWidgetProps,
    _context?: unknown
): React.ReactElement => {
    return (
        <div className="border rounded mb-2 p-2 x-post-widget">
            <PostHeader avatar={props.avatar} post={props.post} />
            <PostBody post={props.post} />
        </div>
    );
};

export default PostWidget;
