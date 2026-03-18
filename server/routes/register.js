import db from "../db/connect.js";

export const register = async (form) => {
    try {
        const reqest = await db.execute(`
            INSERT INTO guests (fi, date_of_birth, gender, citizenship, passport, phone) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                form.fi,
                form.dateOfBirth, 
                form.gender,
                form.citizenship,
                parseInt(form.passport),
                parseInt(form.phone)
            ]
        );
        return {status: true};
    } catch (error) {
        console.error(error)
        return {error: error.message};
    };
};
