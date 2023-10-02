import { Query } from "./index";
import { Blog } from "./types";
import { Author } from "./types";

const all = async () => Query<Author[]>('SELECT * FROM authors');
const getOne = (id: Author["id"]) => Query<Author[]>('SELECT * FROM author WHERE id=?', [id]);



export default {
    all,
    getOne
}