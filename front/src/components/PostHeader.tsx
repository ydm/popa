import React from "react";
import { PostProps } from "./types";

const PostHeader: React.VFC<PostProps> = (
    props: PostProps,
    _context?: unknown
): React.ReactElement => {
    return (
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
                                <span className="fw-bolder">{props.post.title}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="font-italic fs-6">
                                    {props.post.created}
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
