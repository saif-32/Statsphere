import React from 'react';

export const Footer = () => {
    return (
<div>
  <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="footer-box about-widget">
            <h2 className="widget-title">About Us</h2>
            <p>Statsphere is an innovative sports analytics platform that leverages historical data to provide you with insights and fosters a dynamic sports community.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="footer-box get-in-touch">
            <h2 className="widget-title">Get In Touch</h2>
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
};

export default Footer;