import mysql from "mysql2/promise";

const connect = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "270206091324",
    database: "NestRoom"
});

export default connect;
