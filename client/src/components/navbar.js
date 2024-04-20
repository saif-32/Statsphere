import { Link } from "react-router-dom"; 

export const Navbar = () => {
    return (
    <div>
        <div class="top-header-area" id="sticker">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <div class="main-menu-wrap">
                            <div class="site-logo">
                                <a href="index">
                                    <img src="../assets/img/logo.png" alt=""></img>
                                </a>
                            </div> 

                            <nav class="main-menu">
                                <ul>
                                    <li><a href="index">Home</a></li>
                                    <li><a href="trending.html">Trending</a></li>
                                    <li><a href="#">Sport <i class="fas fa-caret-down"></i></a>
                                        <ul class="sub-menu">
                                            <li><a>MLB</a></li>
                                            <li><a>NBA</a></li>
                                            <li><a>NFL</a></li>
                                            <li><a>NHL</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="scores.html">Scores</a></li>
                                    <li><a href="teams.html">My Teams</a></li>
                                    <li>
                                        <div class="header-icons">
                                            <a class="shopping-cart" href="account"><i class="fas fa-user"></i></a>
                                            <a class="mobile-hide search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};