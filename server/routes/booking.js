import express from "express";

import { addBooking } from "../services/bookingService";

const roter = express.Router();

roter.post("/register", addBooking);

export default roter;