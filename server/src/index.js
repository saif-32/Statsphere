// Import required dependencies
import express from 'express'; 
import cors from 'cors'; 
import mongoose from 'mongoose'; 
import { userRouter } from './routes/users.js' 
import { postsRouter } from './routes/posts.js' 

// Initialize Express application
const app = express();

// Middleware setup
app.use(express.json()); 
app.use(cors());

// Route setup
app.use("/auth", userRouter); 
app.use("/posts", postsRouter); 

// MongoDB connection setup
mongoose.connect(
    "mongodb+srv://statspheredev:UTSA123@statsphere.uf35i69.mongodb.net/Statsphere?retryWrites=true&w=majority&appName=Statsphere", // MongoDB Atlas URI
);

// Define port for server to listen on
const port = 3001; 

// Start server and listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log message indicating server startup
});
