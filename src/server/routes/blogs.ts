import * as express from 'express';
import database from '../database';

const router = express.Router();

// GET /api/blogs/123
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const blogs = await database.blogs.getOne(id);
        res.json(blogs[0]);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Blog unavaliable"});
    }
});

// GET /api/blogs
router.get('/', async (req, res) => {
    try {
        let blogs = await database.blogs.all();
        res.json(blogs)
    } catch(e) {
        console.log(e);
        res.sendStatus(500).json({message: "Unable to get blogs"})
    }
});

// POST /api/blogs
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { title, content, authorid, tagid } = req.body;
        if (!title || !content || !authorid) return res.status(400).json({message: "missing info."});
        const results = await database.blogs.create(title, content, authorid);
        res.status(201).json({message: "Blog post created!"});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Unable to create blog post."});
    }
});

// DELETE /api/blogs/123
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await database.blogs.destroy(id);
        res.status(200).json({message: "Blog deleted."});
    } catch(e) {
        console.log(e);
        res.status(500).json({message: "Unable to delete blog."});
    }
});

// PUT /api/blogs/123
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)

        const id = Number(req.params.id);
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({message: "missing data."});
        const results = await database.blogs.update(id, title, content);
        res.status(201).json({message: "blog updated.", results});
    } catch(e) {
        console.log(e);
        res.status(500);
    }
});

export default router;