import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://statsspheretech:Hannon10@stats.s4pqakt.mongodb.net/stats?retryWrites=true&w=majority&appName=stats");

app.listen(3001, () => console.log("Server is running."))
