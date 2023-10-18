import * as express from 'express';
import blogsRouter from './blogs';
import authorRouter from './authors';
import tagsRouter from './tags';
import contactRouter from './contact';

const router = express.Router();

router.use("/blogs", blogsRouter)
router.use("/authors", authorRouter)
router.use("/tags", tagsRouter)
router.use("/contact", contactRouter)

export default router;