export type Reply = {
    created: string;
    modified: string;
    author: string;
    html: string;
};

export type Post = {
    created: string;
    modified: string;
    author: string;
    title: string;
    html: string;
    replies: Reply[];
};

export type PostProps = {
    post: Post;
};
