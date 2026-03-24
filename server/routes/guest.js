import express from "express";

import { guestDeleteController, guestRegisterController } from "../controller/guestsController.js";

const router = express.Router();

router.delete("/:id/delete", guestDeleteController);
router.post("/register", guestRegisterController);

export default router
