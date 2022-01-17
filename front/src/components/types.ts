export type Reply = {
    created: string;
    modified: string;
    author: string;
    body: string;
};

export type Post = {
    created: string;
    modified: string;
    author: string;
    title: string;
    body: string;
    replies: Reply[];
};
