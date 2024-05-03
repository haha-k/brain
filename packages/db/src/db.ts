import path from "node:path";

import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../../apps/api/.env") });

console.log("connection string: ", process.env.DATABASE_URL);
const connection = mysql.createConnection({
    // process.env.DATABASE_URL ?? ""
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

    // export const db = drizzle(connection);

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL database!');
    });

    // import mysql from 'mysql2'
    // const connection = mysql.createConnection({
    //     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'mydb'
// });