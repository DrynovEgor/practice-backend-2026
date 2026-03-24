import { getAllRooms, updateRoomStatus } from "../services/roomsService.js";

export const updateStatus = async (req, res) => {
    try {
        const roomId = req.params.id;
        const {statusId} = req.body;

        await updateRoomStatus(roomId, statusId);

        res.json({status: "ok"});
    } catch (err) {
        res.status(500).json({status: "error"})
    };
};

export const getRooms = async (req, res) => {
    try {
        const answer = await getAllRooms();

        if (!answer.status) return res.json(answer);
        
        return res.json(answer.rooms);
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: false});
    };
};
