import React from "react";

export const Mission = (props) => {
  return (
    <div id="mission" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Mission</h2>
          <h4>To inspire a healthier, more vibrant lifestyle by offering natural, fresh, and organic refreshment that empowers you to care for your body and embrace positive change.</h4>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-6 col-lg-6" >

                <div className="mission">

                  <div className="mission-image">
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
