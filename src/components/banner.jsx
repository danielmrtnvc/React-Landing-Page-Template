import React from "react";

export const Banner = (props) => {
  return (
    <div id="banner" className="text-center">
      <div className="overlay">
        <img src="img/banner-image.png" alt="" />{" "}
        <div className="banner-qoute">
          <h2>Detox, hydrate, and refresh with Blush. The natural, organic choice your body deserves.</h2>
        </div>
      </div>
    </div>
  );
};
