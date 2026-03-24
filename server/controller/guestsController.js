import { guestDelete, guestRegister } from "../services/guestsService.js";

export const guestDeleteController = async (req, res) => {
    try {
        const guestId = req.params.id;
        const answer = await guestDelete(guestId);
        
        res.json(answer);
    } catch (error) {
        console.log("Ошибка удаления гостя: " + error);
        res.json({status: false, message: "Ошибка сервера"})
    };
};

export const guestRegisterController = async (req, res) => {
    try {
        const form = req.params.form;
        const answer = await guestRegister(form);

        res.json(answer);
    } catch (error) {
        console.log("Ошибка регистрации гостя: " + error);
        res.json({status: false, message: "Ошибка сервера"})
    };
};
