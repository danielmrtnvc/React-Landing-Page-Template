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
                <h3>SUBSCRIBE</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 footer-info">
            <div className="footer-item">
              <h3>About Us</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
              </p>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
              </p>
            </div>
            <div className="footer-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
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
