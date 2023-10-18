import * as express from "express";
import database from "../database";

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        let tags = await database.tags.all();
        res.json(tags)
        
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Unable to get tags"})
    }
});

export default router;