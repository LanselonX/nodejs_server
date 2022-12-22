import Router from "express";
import PostController from "./PostController.js";
// import Post from "./Post.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/delete/:id", PostController.delete);

export default router;
