import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);



mongoose.connect(
    "mongodb+srv://statspheredev:UTSA123@statsphere.uf35i69.mongodb.net/Statsphere?retryWrites=true&w=majority&appName=Statsphere",
);

const port = 3001; // Define the port number

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log a message indicating the server is running on the specified port
});