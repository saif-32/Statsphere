import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export const Teams = () => {
  const selectboxheading = {
    color:'#F28123', 
    fontWeight:700, 
    textTransform:"uppercase", 
    letterSpacing:1, 
    fontSize:15
  }

    return (
        <div>
            <Header />
              <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="breadcrumb-text">
                        <p>under construction</p>
                        <h1>My Favorite Teams</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" style={{paddingTop: 40, paddingRight: 40}}>
                <div className="col-4 col-lg-4 text-center" style={{height:'100vh'}}>
                  <p style={selectboxheading}>Choose your favorite teams:</p>
                  <select className="selectpicker" multiple data-live-search="true">
                    {/* options gets "selected" class when selected */}
                    <option>team 1</option> 
                    <option>team 2</option>
                    <option>team 3</option>
                  </select>
                </div>
		            <div className="col-8">
			            <div className="row">
                    <div className="single-latest-news" style={{width:'50%'}}>
                      <div className="news-text-box">
                        <p className="blog-meta">
                          <div className="score-box">
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                            <div>
                              <p>## - ##</p>
                            </div>
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-news" style={{width:'50%'}}>
                      <div className="news-text-box">
                        <p className="blog-meta">
                          <div className="score-box">
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                            <div>
                              <p>## - ##</p>
                            </div>
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-news" style={{width:'50%'}}>
                      <div className="news-text-box">
                        <p className="blog-meta">
                          <div className="score-box">
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                            <div>
                              <p>## - ##</p>
                            </div>
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-news" style={{width:'50%'}}>
                      <div className="news-text-box">
                        <p className="blog-meta">
                          <div className="score-box">
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                            <div>
                              <p>## - ##</p>
                            </div>
                            <div className="team">
                              <img src="assets/img/favicon.png" alt="team name"/>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <Footer />
        </div>
    );
};

export default Teams;
