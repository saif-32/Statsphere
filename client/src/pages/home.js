import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export const Home = () => {
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
            <p>under construction</p>
            <h1>Trending</h1>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* end hero area */}
  {/* main columns */}
  <div className="row" style={{padding: 40}}>
    <div className="col-4 col-lg-4 text-center">
      <div className="section-title">
        <h3>Latest Scores</h3>
        <p>From your favorite teams</p>
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
