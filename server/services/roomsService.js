import db from "../db/connect.js";

export const getAllRooms = async () => {
    try {
        const [rows, result] = await db.query(`
            SELECT 
                rooms.room_number,
                room_status.description AS status,
                rooms.price
            FROM rooms
            JOIN room_status ON rooms.status = room_status.id
        `);

        if (result.length == 0 || !result) return {status: false, message: "Ошибка бд"}

        return {status: true, rooms: rows};
    } catch (err) {
        console.log(err);
        return {status: false};
    }
};

export const updateRoomStatus = async (roomId, statusId) => {
    try {
        const [result] = await db.execute(
            "UPDATE rooms SET status = ? WHERE room_number = ?",
            [statusId, roomId]
        )

        if (result.affectedRows == 0) {
            return {status: false, message: "Комната не найдена"}
        };

        return {status: true};
    } catch (err) {
        console.log(err);
        return {status: false}
    }
};
