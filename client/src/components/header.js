import React from 'react';

export const Header = () => {
    return (
<div>
  <div className="top-header-area" id="sticker">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="main-menu-wrap">
            {/* logo */}
            <div className="site-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt />
              </a>
            </div>
            {/* logo */}
            {/* menu start */}
            <nav className="main-menu">
              <ul>
                <li><a href="/">Home</a>
                </li>
                <li><a href="/trending">Trending</a></li>
                <li><a href="#">Sport <i className="fas fa-caret-down" /></a>
                  <ul className="sub-menu">
                    <li><a>MLB</a></li>
                    <li><a>NBA</a></li>
                    <li><a>NFL</a></li>
                    <li><a>NHL</a></li>
                  </ul>
                </li>
                <li><a href="/scores">Scores</a>
                </li>
                <li><a href="/teams">My Teams</a></li>
                <li>
                  <div className="header-icons">
                    <a className="shopping-cart" href="/login"><i className="fas fa-user" /></a>
                    <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                  </div>
                </li>
              </ul>
            </nav>
            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
            <div className="mobile-menu" />
            {/* menu end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Header;