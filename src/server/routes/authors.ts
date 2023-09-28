import * as express from 'express';
import database from '../database';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const authors = await database.authors.getOne(id);
        res.json(authors[0]);
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

export default router;