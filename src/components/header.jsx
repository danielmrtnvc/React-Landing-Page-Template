import React from "react";
import videoBg from '../assets/blush-intro-vid.mp4';
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="">
        <div className="">
          <div className="">
            <div className="">

                <header className="hero">

                  <video src={videoBg} autoPlay loop muted/>

                  <div className="hero-content">
                    <h1>Drink Blush</h1>
                    <p>IT'LL MAKE YOU BLUSH.</p>
                  </div>
                </header>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};
