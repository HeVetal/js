// import {Client} from "pg";
// import {DataTypes} from 'sequelize'

// const Post = new client.Schema({
//     author: {type: String, required: true},
//     title: {type: String, required: true},
//     content: {type: String, required: true},
//     picture: {type: String}
// })
//
// export default Client.model('Post', Post);
import {sequelize} from "./dbjs.js";
import { DataTypes } from 'sequelize';


const Post = sequelize.define("Post", {
    author: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false},
    picture: {type: DataTypes.STRING}
})

export default Post;