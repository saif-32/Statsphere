import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export const Trending = () => {
    return (
        <div>
            <Header />
<div>
  {/* breadcrumb-section */}
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
  {/* end breadcrumb section */}
  {/* trending posts */}
  <div className="col-12 text-center" style={{paddingTop: 10, paddingLeft: 250, paddingRight: 250}}>
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
  {/* end trending posts */}
</div>

            <Footer />
        </div>
    );
};

export default Trending;
