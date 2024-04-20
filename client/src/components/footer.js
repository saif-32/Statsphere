import {Link} from "react-router-dom"

export const Footer = () => {
    return (
        <div>
            <div class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="footer-box about-widget">
                                <h2 class="widget-title">About Us</h2>
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="footer-box get-in-touch">
                                <h2 class="widget-title">Get In Touch</h2>
                                <ul>
                                    <li>1 UTSA Circle, San Antonio, TX 78249</li>
                                    <li>support@statsphere.com</li>
                                    <li>(210) 458-4011</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

