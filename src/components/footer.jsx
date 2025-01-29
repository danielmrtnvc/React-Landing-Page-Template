import React from "react";

export const Footer = (props) => {
  return (
      <div id="footer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h3>Newsletter</h3>
                <p>
                  Subscribe to our newsletter and stay in touch with Blush.
                </p>
                <h3>SUBSCRIBE TO NEWSLETTER</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 footer-info">
            <div className="footer-item">
              <h3>Contact Us</h3>
              <p>
                <span>
                  <i className="fa fa-instagram"></i> <a href="https://www.instagram.com/drinkblush_" target="_blank" >Follow Blush</a>
                </span>
              </p>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> <a href="#contact">Work with Us</a>
                </span>{" "}
              </p>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-book"></i> <a href="#mission">Our Story</a>
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                <li>
                  <a href="https://www.instagram.com/drinkblush_" target="_blank" >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  
                  <li>
                  <a href="https://x.com/drinkblush" target="_blank" >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61572410199484" target="_blank" >
                      <i className="fa fa-facebook"></i> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
