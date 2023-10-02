import { OkPacket } from "mysql";
import { Query } from "./index";
import { Blog } from "../../types";
import { Author } from "../../types";
import { BlogJoined } from "../../types";

const all = async () => Query<BlogJoined[]>(`SELECT b.*, t.name as tag, a.name FROM Blogs b
JOIN BlogTags bt ON bt.blogid=b.id
JOIN Tags t ON t.id=bt.tagid
JOIN authors a ON a.id=b.authorid`);
const getOne = (id: Blog["id"]) => Query<BlogJoined[]>(`SELECT b.*, t.name as tag, a.name FROM Blogs b
JOIN BlogTags bt ON bt.blogid=b.id
JOIN Tags t ON t.id=bt.tagid
JOIN authors a ON a.id=b.authorid
WHERE b.id=?`, [id]);
const create = (title: string, content: string, authorid: Author["id"]) => Query('INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)', [title, content, authorid]);
const update = (id: Blog["id"], title: string, content: string) => Query('UPDATE blogs SET title=?, content=? WHERE id=?', [title, content, id]);
const destroy = (id: Blog["id"]) => Query('DELETE FROM blogs WHERE id=?', [id]);
const destroyAllAuthor = (authorid: Author["id"]) => Query('DELETE FROM blogs WHERE authorid=?', [authorid]);



export default {
    all,
    getOne,
    create,
    update,
    destroy,
    destroyAllAuthor
}