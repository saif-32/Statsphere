import React, { useState, useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';


export const Home = () => {

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
                  <h1>Welcome User!</h1>
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
        <p>[Sort/filter function]</p>
      </div>
      <div className="col-home">
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
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
    </div>




    <div className="col-4 col-lg-4 text-center">
      <div className="section-title">
        <h3>Trending <span className="orange-text">Right Now</span></h3>
        <p>See what everyone is talking about.</p>
      </div>
      <div className="col-home">
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <div className="single-latest-news">
          <div className="news-text-box">
            <p className="blog-meta">
              <span className="author"><i className="fas fa-user" /> Admin</span>
              <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
            </p>
            <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
          </div>
        </div>
        <a href="trending.html" className="boxed-btn">More</a>
      </div>
    </div>
  </div>
</div>

            <Footer />
        </div>
    );
};

export default Home;
