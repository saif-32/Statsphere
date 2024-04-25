import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';


export const Home = () => {

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





  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        const response = await axios.get('https://api-nba-v1.p.rapidapi.com/games', {
          params: { date: currentDate },
          headers: {
            'X-RapidAPI-Key': '-', // Inside the discord
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        setGameData(response.data.response);
        console.log(response.data.response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  




  const greeting = username ? `Welcome ${username}!` : 'Welcome to Statsphere.';

  return (
    <div>
      <Header />
      <div>
        {/* hero area */}
        <div className="breadcrumb-section breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                  <p>stat sphere</p>
                  <h1>{greeting}</h1>
                  <h2>Check out what's happening today!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="row" style={{ padding: 40 }}>
          <div className="col-4 col-lg-4 text-center">
            <div className="section-title">
              <h3>Latest Scores</h3>
              <p>From your favorite teams</p>
            </div>


            <div className="col-home">

                <div className="single-latest-news">
              <div className="news-text-box">
                <p className="blog-meta">
                <div class="score-box">
                    <div class="team">
                      <img src="left_team_image.jpg" alt="Left Team" />
                    </div>

                    <div class="score-info">
                        <div class="game-progress">In play</div>
                        <div class="date">Date</div>
                        <div class="score">0 - 0</div>
                        <div class="home-visitor">Home vs Visitor</div>
                    </div>
                    <div class="team">
                      <img src="right_team_image.jpg" alt="Right Team" />
                    </div>
                    </div>
                </p>
              </div>
              </div>



              {gameData.map(game => (
                <div className="single-latest-news" key={game.id}>
                  <div className="news-text-box">
                    <p className="blog-meta">
                      <div className="score-box">
                        <div className="team">
                          <img src={game.teams.visitors.logo} alt={game.teams.visitors.name} />
                        </div>
                        <div class="score-info">
                            <div class="game-progress">{game.status.long}</div>
                            <div class="date">{formatDate(game.date.start)}</div>
                            <div class="score">{game.scores.visitors.points} - {game.scores.home.points}</div>
                            <div class="home-visitor">{game.teams.visitors.name} vs {game.teams.home.name}</div>
                        </div>
                        <div className="team">
                          <img src={game.teams.home.logo} alt={game.teams.home.name} />
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>


          </div>



    <div className="col-4 col-lg-4 text-center">
      <div className="section-title">
        <h3>All Posts</h3>
        <p>The newest posts available.</p>
      </div>
      <div className="col-home">

        {sortedPosts.map(post => (
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
              <span className="comments"><i class="fas fa-comment"></i> 5</span>
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
            <span className="likes"><i class="fas fa-thumbs-up"></i> <p>10</p> </span>
            <span className="comments"><i class="fas fa-comment"></i> 5</span>
          </div>
        </div>


      </div>
    </div>




    <div className="col-4 col-lg-4 text-center">
      <div className="section-title">
        <h3>Trending <span className="orange-text">Right Now</span></h3>
        <p>See what everyone is talking about.</p>
      </div>
      <div className="col-home">
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
      <span className="likes" style={{ color: post.likes.includes(userID) ? 'red' : 'black' }} onClick={() => handleLike(post._id)}>
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
        <a href="/trending" className="boxed-btn">More</a>
      </div>
    </div>
  </div>
</div>

            <Footer />
        </div>
    );
};

export default Home;
