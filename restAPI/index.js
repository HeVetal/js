import express from 'express';
import {sequelize} from "./dbjs.js";
import './Post.js'

const PORT = 5000;

const app = express()
app.use((req, res, next) => {
    console.log('📨 Incoming request:', {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body
    });
    next();
});

app.use(express.json());

console.log('Available models:', Object.keys(sequelize.models));

app.post('/posts', async (req, res) => {
    try {

        // // const {author, title, content, picture} = req.body;
        // // const post = await sequelize.models.Post.create({author, title, content, picture});
        // // console.log(req.body);
        // // res.status(200).json('work1')
        // console.log('✅ Received POST request to /posts');
        // console.log('Request body:', req.body);
        //
        // const {author, title, content, picture} = req.body;
        //
        // console.log('⏳ Attempting to create post...');
        //
        // // Создаем пост с таймаутом
        // const post = await sequelize.models.Post.create({
        //     author,
        //     title,
        //     content,
        //     picture
        // });
        //
        // console.log('✅ Post created successfully:', post.toJSON());
        // res.status(200).json('work1');
        console.log('✅ Received POST request to /posts');
        console.log('Request body:', req.body);

        const {author, title, content, picture} = req.body;

        console.log('⏳ Attempting to create post...');

        const post = await sequelize.models.Post.create({
            author,
            title,
            content,
            picture
        });

        console.log('✅ Post created successfully:', post.toJSON());
        res.status(200).json('work1');
    } catch (error) {
        console.error('❌ Error creating post:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
})

app.get('/posts', async (req, res) => {
    try {
        console.log('📝 Getting all posts...');
        const posts = await sequelize.models.Post.findAll();
        res.json(posts);
    } catch (error) {
        console.error('❌ Error fetching posts:', error);
        res.status(500).json({error: error.message});
    }
});

app.get('/', (req, res) => {
    res.json({message: 'Server is working!'});
});

// async function startApp() {
//     try {
//         await sequelize.authenticate();
//         console.log('DB Connected');
//         await sequelize.sync();
//         console.log('DB synchronized');
//         app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//     } catch (e) {
//         console.log(e)
//     }
// }
async function startApp() {
    try {
        console.log('⏳ Connecting to database...');
        await sequelize.authenticate();
        console.log('✅ DB Connected');

        console.log('⏳ Synchronizing database...');
        await sequelize.sync();
        console.log('✅ DB synchronized');

        app.listen(PORT, () => {
            console.log(`🚀 Server started on port ${PORT}`);
            console.log(`📍 Test GET: http://localhost:${PORT}/`);
            console.log(`📍 Create POST: http://localhost:${PORT}/posts`);
        });

    } catch (e) {
        console.error('❌ Startup error:', e);
    }
}

startApp()

