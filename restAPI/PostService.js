import Post from "./Post.js";

class PostService {
    async create(post, picture) {
        const createPost = await Post.create(post)
        return createPost;
    }

    async getAll() {
        const posts = await Post.findAll();
        return posts;
    }

    async getOne(id) {

        if (!id) {
            throw new Error("Id not found");
        }
        const post = await Post.findByPk(id)
        return post
    }

    async update(postData) {
        const {id, ...updateData} = postData;

        if (!id) {
            throw new Error("Id not found");
        }

        const post = await Post.findByPk(id)
        if (!post) {
            throw new Error("Post not found");
        }

        const updatePost = await post.update(updateData)
        return updatePost
    }

    async delete(id) {
        if (!id) {
            throw new Error("Id not found");
        }
        const post = await Post.findByPk(id);
        if (!post) {
            throw new Error("Post not found");
        }
        await post.destroy()
        return post
    }
}

export default new PostService();