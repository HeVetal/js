import {Sequelize, DataTypes, Model} from "sequelize";

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'postgres',
    username: 'user',
    password: 'root',
    port: 5432,
    logging: false,
});

class Post extends Model {
}

Post.init({
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: true,
});

export default Post;