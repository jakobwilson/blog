import * as express from 'express';
import blogsRouter from './blogs';
import authorRouter from './authors';

const router = express.Router();

router.use("/blogs", blogsRouter)
router.use("/authors", authorRouter)

export default router;