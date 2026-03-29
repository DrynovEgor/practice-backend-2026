import db from "../db/connect.js";

export const guestRegister = async (form) => {
    try {
        let [result] = await db.execute("SELECT * FROM guests WHERE passport = ?", [parseInt(form.passport)]);

        if (result.length != 0) return {status: true}; 

        [result] = await db.execute(`
            INSERT INTO guests (fi, date_of_birth, gender, citizenship, passport, phone, roleId, password) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                form.fi,
                form.dateOfBirth, 
                form.gender,
                form.citizenship,
                parseInt(form.passport),
                parseInt(form.phone),
                2,
                form.password
            ]
        );

        if (result.affectedRows == 0) return {status: false};
        return {status: true};
    } catch (error) {
        console.error(error);
        return {error: error.message};
    };
};

export const guestDelete = async (guesrId) => {
    try {
        const [result] = await db.execute("DELETE FROM guests WHERE id = ?", [guesrId])
        
        if (result.affectedRows == 0) return {status: false, message: "id не найден"};

        return {status: true};
    } catch (error) {
        console.log("Ошибка удаления гостя: " + error)
    }
};
