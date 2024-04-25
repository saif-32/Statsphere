import express from 'express'
import mongoose from 'mongoose';
import { PostModel } from '../models/Posts.js'

const router = express.Router()

router.get("/", async(req, res) =>{
    try{
        const response = await PostModel.find({})
        res.json(response);

    } catch(err){
        res.json(err)
    }
})

router.post("/", async(req, res) =>{
    const post = new PostModel( req.body );
    try{
        const response = await post.save();
        res.json(post);

    } catch(err){
        res.json(err)
    }
})

router.post('/like/:postId', async (req, res) => {
    try {
      const { userID } = req.body; // Assuming you're sending userID in the request body
      console.log(userID)
  
      const post = await PostModel.findById(req.params.postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      if (post.likes.includes(userID)) {
        return res.status(400).json({ message: 'You have already liked this post' });
      }
  
      post.likes.push(userID);
  
      await post.save();
  
      res.status(200).json({ message: 'Post liked successfully' });
    } catch (error) {
      console.error('Error liking post:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

router.post('/unlike/:postId', async (req, res) => {
    try {
      const { userID } = req.body; // Assuming you're sending userID in the request body
  
      // Find the post by postId
      const post = await PostModel.findById(req.params.postId);
  
      // Check if the post exists
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Check if the user has liked the post
      if (!post.likes.includes(userID)) {
        return res.status(400).json({ message: 'You have not liked this post' });
      }
  
      // Remove the user's ID from the likes array of the post
      post.likes = post.likes.filter(like => like.toString() !== userID.toString());
  
      // Save the updated post
      await post.save();
  
      res.status(200).json({ message: 'Post unliked successfully' });
    } catch (error) {
      console.error('Error unliking post:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  // endpoint to add a comment to a post
router.post('/:postId/comments', async (req, res) => {
  try {
    const { text, userID } = req.body; //send text of the comment and userID

    // Find the post by ID
    const post = await PostModel.findById(req.params.postId);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // create comment object
    const comment = {
      text,
      createdBy: userID,
      createdAt: new Date(),
    };

    // add the comment to the posts comment array
    post.comments.push(comment);

    // saved with new comment
    await post.save();

    // send the updated post as a response
    res.status(200).json(post);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
  

export {router as postsRouter }

