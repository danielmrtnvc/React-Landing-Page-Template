import React from "react";

export const Nature = (props) => {
  return (
    <div id="nature" className="text-center">
      <div className="nature-container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Sip into Desire.</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-md-12 col-lg-12" >

                <div className="nature">

                  <div className="nature-image">
                    {" "}
                    <img src={d.img} alt=""/>{" "}
                  </div>
                </div>
              </div>

            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
