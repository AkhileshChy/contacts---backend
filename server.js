import express from "express";
import dotenv from "dotenv";
import router from "./routes/contact.routes.js";
import {  errorHandler } from "./middleware/errorHandler.js";
import connectDB from "./db/connectToDatabase.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`);
})