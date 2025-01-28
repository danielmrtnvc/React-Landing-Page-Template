import React from "react";

export const Ingredients = (props) => {
  return (
    <div id="ingredients" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Made with two simple ingredients.</h2>
          <h3>Detox, hydrate, and refresh with Blush.</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-6 col-lg-6" >

                <div className="ingredients">

                  <div className="ingredients-image">
                    {" "}
                    <img src={d.img} alt=""/>{" "}
                  </div>

                  <h3>{d.title}</h3>

                </div>
              </div>

            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
