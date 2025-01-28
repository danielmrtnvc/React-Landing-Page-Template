import React from "react";

export const Nature = (props) => {
  return (
    <div id="nature" className="text-center">
      <div className="nature-container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Fresh from Nature</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-md-12 col-lg-12" >

                <div className="naturen">

                  <div className="nature-image">
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
