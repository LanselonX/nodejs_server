import Post from "./Post.js";
import PostService from "./PostService.js";
import mongoose from "mongoose";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      let id = req.params.id;
      const cast = mongoose.Types.ObjectId(id);
      if (!id) {
        throw new Error("wrong ID");
      }
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: e.message });

      //   const data = axios.get('/api/posts/8u2r8sjsf')

      //   if(data.error) {
      //     // draw empty screen
      //   }

      //   // draw user that we get
      //   <h1>{data.author}</h1>
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "Id не указан" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Id не указан" });
      }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
