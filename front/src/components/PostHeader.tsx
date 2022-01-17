import React from "react";
import { Post } from "./types";

import "./PostHeader.css";

type PostHeaderProps = {
    post: Post;
    avatar?: string;
};

const PostHeader: React.VFC<PostHeaderProps> = (
    props: PostHeaderProps,
    _context?: unknown
): React.ReactElement => {
    const avatar = props.avatar || "img/pepe.png";

    return (
        <div className="row">
            <div className="col">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="d-flex pe-3">
                        <img
                            alt="TODO"
                            className="rounded-circle"
                            src={avatar}
                            width="40px"
                            height="40px"
                        />
                    </div>
                    <div className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <div className="row">
                            <div className="col lh-1">
                                <span className="fw-bolder">
                                    {props.post.title}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col lh-1">
                                <span className="font-italic x-post-header-ts">
                                {props.post.author} | {props.post.created}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostHeader;
