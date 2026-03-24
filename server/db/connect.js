import mysql from "mysql2/promise";


let connect;
try {
    connect = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "270206091324",
        database: "NestRoom"
    });    
} catch (error) {
    console.log("Error connect db");
}

export default connect;
