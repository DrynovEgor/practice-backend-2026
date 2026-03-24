import express from "express";
import { getRooms, updateStatus } from "../controller/roomsController.js";

const router = express.Router();

router.get("/", getRooms);
router.patch("/:id/status", updateStatus)

export default router;