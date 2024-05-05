// import path from "node:path";

// import dotenv from "dotenv";

// dotenv.config({ path: path.resolve(__dirname, "../../../apps/api/.env") });

// console.log("connection string: ", process.env.DATABASE_URL);
// const connection = mysql.createConnection({
//     // process.env.DATABASE_URL ?? ""
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'mydb'
// });

    // export const db = drizzle(connection);

    // connection.connect((err) => {
    //     if (err) throw err;
    //     console.log('Connected to MySQL database!');
    // });

    // import mysql from 'mysql2'
    // const connection = mysql.createConnection({
    //     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'mydb'
// });


import mysql from "mysql2/promise";

// 缓存连接池
const poolMap = new Map<string, mysql.Pool>();

export async function useMysql(type: string): Promise<mysql.Pool | undefined> {
    // 获取数据库连接字符串
    const uri = getServerMysqlUri(type);

    // 从缓存中获取连接池
    if (poolMap.has(type)) {
        const pool = poolMap.get(type);
        return pool;
    }

    try {
        const pool = await mysql.createPool(uri);

        // 缓存
        poolMap.set(type, pool);

        return pool;
    } catch (error) {
        console.error("[Error]: mysql connection error.");
        return;
    }
}