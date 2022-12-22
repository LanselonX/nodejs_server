import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status (500).json(e)
        }
    }

    async getAll(req, res) {
       try {
        const posts = await Post.find();
        return res.json(posts);
       } catch (e) {
        res.status(500).json(e)
       }
    }
    async getOne(req, res) {
        try {
            let id = req.params.id
            console.log(req.params)
            if (!id) {
                throw new Error('не указан ID')
            }
            const post = await PostService.getOne(id);
            console.log(post)
            return res.json(post)
        } catch (e) {
         res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatedPost);
        } catch (e) {
         res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post)
        } catch (e) {
         res.status(500).json(e)
        }
    }
}


export default new PostController();