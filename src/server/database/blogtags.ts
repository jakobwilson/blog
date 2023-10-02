import { Query } from ".";

interface BlogPairTag {
    blogid: number;
    tagid: number;
}

const create = ({ blogid, tagid }: BlogPairTag) => Query("INSERT INTO BlogTags (blogid, tagid) VALUES (?, ?)", [blogid, tagid]);
const destroy = ( blogid: number ) => Query("DELETE FROM BlogTags WHERE blogid=?", [blogid]);

export default {
    create,
    destroy
};