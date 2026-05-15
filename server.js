import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from "./routes/index.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT ?? 5000;

connectDB();
app.get("/api", (req,res)=>{
    res.send("Welcome to the Grocery API plateform");
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});