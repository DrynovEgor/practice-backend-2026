import express from "express";
import cors from "cors";

import roomsRouter from "./routes/rooms.js";
import guestsRouter from "./routes/guest.js";
import bookingRouter from "./routes/booking.js"

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/test", (req, res) => {
    res.json({message: 200});
})
app.use("/rooms", roomsRouter);

app.use("/guests", guestsRouter)

app.use("/booking", bookingRouter)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
