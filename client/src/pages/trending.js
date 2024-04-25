import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Trending = () => {


  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userID = window.localStorage.getItem("userID");
        setUserID(userID)
        const response = await axios.post('http://localhost:3001/auth/getUserInfo', { userID });
        setUsername(response.data.user.username);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        const postsWithUserInfo = await Promise.all(response.data.map(async post => {
          const userResponse = await axios.post(`http://localhost:3001/auth/getUserInfo`, { userID: post.userOwner });
          return { ...post, username: userResponse.data.user.username };
        }));
        setPosts(postsWithUserInfo);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const sortedPosts = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedPostsByLikes = posts.slice().sort((a, b) => b.likes.length - a.likes.length);


  const handleLike = async (postId) => {
    try {
      console.log("handling like")
      console.log(postId)
      // Check if the post is already liked by the user
      const likedPostIndex = posts.findIndex(post => post._id === postId);
      const isLiked = posts[likedPostIndex].likes.includes(userID); // Use userID instead of username

      console.log(likedPostIndex)
      console.log(isLiked)
      
      // Send a request to like/unlike the post
      if (!isLiked) {
        console.log("Liking post")
        await axios.post(`http://localhost:3001/posts/like/${postId}`, { userID }); // Use userID instead of username
      } else {
        console.log("Unliking post")
        await axios.post(`http://localhost:3001/posts/unlike/${postId}`, { userID }); // Use userID instead of username
      }
      
      // Update the like count in the UI
      const updatedPosts = [...posts];
      if (!isLiked) {
        updatedPosts[likedPostIndex].likes.push(userID); // Use userID instead of username
      } else {
        updatedPosts[likedPostIndex].likes = updatedPosts[likedPostIndex].likes.filter(like => like !== userID); // Use userID instead of username
      }
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };



    return (
        <div>
            <Header />
              <div>
                <div className="breadcrumb-section breadcrumb-bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                          <p>under construction</p>
                          <h1>Trending</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center" style={{paddingTop: 10, paddingLeft: 250, paddingRight: 250}}>
                {sortedPostsByLikes.map(post => (
                <div className="single-latest-news" key={post._id}>
                  <div className="news-text-box">
                    <p className="blog-meta">
                      <span className="author"><i className="fas fa-user" /> {post.username}</span>
                      <span className="date">
                        <i className="fas fa-calendar" /> 
                        {new Date(post.date).toLocaleString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true // Use 12-hour clock
                        })}
                      </span>
                    </p>
                    <p className="excerpt">{post.description}</p>
                    <span className="likes" style={{ color: post.likes.includes(userID) ? 'red' : 'black' }} onClick={() => userID ? handleLike(post._id) : window.location.href='/login'}>
                      <i className="fas fa-thumbs-up" /> {post.likes.length}
                    </span>
                    <span className="comments"><i className="fas fa-comment"></i> 5</span>
                    {/* <span className="comments"><i className="fas fa-comment" /> {post.comments.length}</span> */}
                  </div>
                </div>
              ))}

                  
                  <div className="single-latest-news">
                    <div className="news-text-box">
                      <p className="blog-meta">
                        <span className="author"><i className="fas fa-user" /> Admin</span>
                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                      </p>
                      <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                    </div>
                  </div>



                </div>
                {/* end trending posts */}
              </div>

            <Footer />
        </div>
    );
};

export default Trending;
