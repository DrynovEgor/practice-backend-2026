import db from "../db/connect.js";

export const addBooking = async (form) => {
    try {
        [result] = await db.execute(`
            INSERT INTO bookings (guest_id, room_id, check_in_date, check_out_date, status_id, total_price) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                form.GuestId,
                form.roomId, 
                form.check_in_date,
                form.check_out_date,
                1,
                160345
            ]
        );

        if (result.affectedRows == 0) return {status: false};
        return {status: true};
    } catch (error) {
        console.error(error);
        return {error: error.message};
    }
} 