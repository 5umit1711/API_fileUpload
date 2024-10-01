import express from 'express';
import cors from 'cors';
import connectDB from './database.js';
import dotenv from 'dotenv';
import fileRouter from './routes/fileRoute.js';


dotenv.config();
const PORT = process.env.PORT || 3000; 
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello");
}); 

app.use("/", fileRouter);

app.listen(PORT, async()=>{
    await connectDB();
    console.log("Server started");
});