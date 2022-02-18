export type Entry = {
    created: string;
    modified: string;
    author: string;
    authorAvatar: string;
    title: string;
    body: string;
    replies: Entry[];
};
