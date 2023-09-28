export interface Blog {
    id: number;
    title : string;
    content: string;
    authorid: Author["id"];
    created_at: string;
}

export interface Author {
    id: number;
    name: string;
    email: string;
    created_at: string;
}