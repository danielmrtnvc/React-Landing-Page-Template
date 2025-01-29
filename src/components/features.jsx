import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Flavors</h2>
        </div>
        <div className="features-row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3 col-lg-3">

                <div className="features">

                  <div className="features-image">
                    {" "}
                    <img src={d.img} alt="" />{" "}
                  </div>

                  <h3>{d.title}</h3>
                  <p>{d.text}</p>

                </div>
              </div>

            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
