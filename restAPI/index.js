import express from 'express';
import Post from './Post.js';
import router from "./router.js";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use('/api', router);

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
