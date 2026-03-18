import db from "../db/connect.js";

export const getRooms = async () => {
    try {
        const [rows] = await db.query(`
            SELECT 
                rooms.room_number,
                room_status.status_name AS status,
                rooms.price
            FROM rooms
            JOIN room_status ON rooms.status = room_status.id
        `);
        return rows;
    } catch (err) {
        console.log(err);
        return {status: "error"};
    }
};
