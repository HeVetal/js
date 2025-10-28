import express from 'express';
import Post from './Post.js';

const PORT = 5000;
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
        const {author, title, content, picture} = req.body;
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    })

async function startApp() {
    try {
        await Post.sequelize.authenticate();
        await Post.sequelize.sync() // create table if not
        console.log('DB sync')
        app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

startApp()
