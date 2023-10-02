import { Query } from ".";
import { Tags } from "../../types"


const all = async () => Query<Tags[]>('SELECT * FROM tags');


export default {
    all
}