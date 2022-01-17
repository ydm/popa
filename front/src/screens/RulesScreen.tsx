import React from "react";
import PostWidget from "../components/PostWidget";
import { Post } from "../components/types";
import { Empty } from "../definitions";

const RulesScreen: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    const body = `
*Правила няма, чеда.*  

*Бъдете свободни словом, духом и телом.*  

*Сървърът не съхранява данни за потребителите.*  

*Амин!*
    `;
        const post: Post = {
        created: "∞",
        modified: "",
        author: "Попа",
        title: "Правила",
        body: body,
        replies: [],
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <PostWidget avatar="img/popa.png" post={post} />{" "}
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    );
};

export default RulesScreen;
