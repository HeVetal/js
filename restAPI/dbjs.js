// import {Client} from 'pg';
//
// const client = new Client({
//     user: 'user',
//     host:'localhost',
//     database: 'postgres',
//     password: 'root',
//     port: 5432,
// });
// async function testConnection(){
//     try{
//         await client.connect();
//         const res = await client.query('SELECT NOW()');
//         console.log('Successfully connected. Time to server:', res.rows[0].now);
//         new client.Schema()
//     } catch (e) {
//         console.error('error', e);
//     } finally {
//         await client.end();
//     }
// }
//
// testConnection();
// import sequelize from 'sequelize';

import {Sequelize} from "sequelize";

export const sequelize = new Sequelize(
    'postgres',
    'user',
    'root',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        }
    })

export const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to Postgres');
        return true
    } catch (error) {
        console.error('DB errrrrr', error.message);
        return false;
    }
}

