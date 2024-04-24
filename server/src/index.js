export express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from '.src/routes/users.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
    "mongodb+srv://statsspheretech:Hannon10@stats.s4pqakt.mongodb.net/stats?retryWrites=true&w=majority&appName=stats",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const port = 3001; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
