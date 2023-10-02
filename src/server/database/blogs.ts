import { OkPacket } from "mysql";
import { Query } from "./index";
import { Blog } from "./types";
import { Author } from "./types";

const all = async () => Query<Blog[]>('SELECT * FROM blogs');
const getOne = (id: Blog["id"]) => Query<Blog[]>('SELECT * FROM blogs WHERE id=?', [id]);
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