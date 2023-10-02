export interface Blog {
    id: number;
    title : string;
    content: string;
    authorid: Author["id"];
    _created: string;
}

export interface Author {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export interface Tags {
    id: number;
    name: string;
}

export interface BlogJoined extends Blog {
    tag: string;
    name: string;
}