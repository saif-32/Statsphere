import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const Header = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.clear();
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <div>
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* logo */}
                <div className="site-logo">
                  <a href="/">
                    <img src="assets/img/logo.png" alt />
                  </a>
                </div>
                {/* logo */}
                {/* menu start */}
                <nav className="main-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/trending">Trending</a></li>
                    <li><a href="#">Sport <i className="fas fa-caret-down" /></a>
                      <ul className="sub-menu">
                        <li><a>MLB</a></li>
                        <li><a>NBA</a></li>
                        <li><a>NFL</a></li>
                        <li><a>NHL</a></li>
                      </ul>
                    </li>
                    <li><a href="/scores">Scores</a></li>
                    <li><a href="/teams">My Teams</a></li>
                    <li>
                      <div className="header-icons">
                        {!cookies.access_token ? (
                          <Link className="shopping-cart" to="/login">
                            <i className="fas fa-user" />
                            <ul className="sub-menu">
                              <li><a><Link to="/login">Login</Link></a></li>
                              <li><a><Link to="/register">Register</Link></a></li>
                            </ul>
                          </Link>
                        ) : (
                          <Link className="shopping-cart" to="/profile">
                          <i className="fas fa-user" />
                          <ul className="sub-menu">
                            <li><a><Link to="/profile">Profile</Link></a></li>
                            <li><a><button className="logout-button" onClick={logout}>Logout</button></a></li>
                          </ul>
                          </Link>
                          
                          // <button className="logout-button" onClick={logout}>Logout</button>
                        )}
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
