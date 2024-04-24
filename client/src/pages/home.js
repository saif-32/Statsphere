import React, { useState, useEffect } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';


export const Home = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-nba-v1.p.rapidapi.com/games', {
          params: { date: '2022-02-12' },
          headers: {
            'X-RapidAPI-Key': '-', // Inside the discord
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        setGameData(response.data.response);
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
                  <p>Live Scores</p>
                  <h1>Stat Sphere</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end hero area */}
        
        {/* main columns */}
        <div className="row" style={{ padding: 40 }}>
          <div className="col-4 col-lg-4 text-center">
            <div className="section-title">
              <h3>Latest Scores</h3>
              <p>From your favorite teams</p>
            </div>
            <div className="col-home">
              {gameData.map(game => (
                <div className="single-latest-news" key={game.id}>
                  <div className="news-text-box">
                    <p className="blog-meta">
                      <div className="score-box">
                        <div className="team">
                          <img src={game.teams.visitors.logo} alt={game.teams.visitors.name} />
                        </div>
                        <div className="score-separator">{game.scores.visitors.points} - {game.scores.home.points}</div>
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
