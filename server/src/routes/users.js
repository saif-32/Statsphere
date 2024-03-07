import express from 'express'
import jwt from 'jsonwebtoken' 
import bcypt from 'byrypt'
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async ( req, res) => {
  const { username, password } = req.body; 

  const user = await UserModel.findOne({username: username});

  res.json(user);
});

router.post("login")

express { router as userRouter };
