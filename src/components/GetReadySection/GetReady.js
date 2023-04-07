import React from "react";
import "./GetReady.css";
const GetReady = () => {
  return (
    <section className="get-ready-section">
      <div className="container">
        <div className="mt-auto row">
          <div className="col">
            <div className="tile--with-shadow text-center get-ready-badge">
              <div className="tile__main">
                Is your project ready to be launched?
              </div>
              <a
                className="round-button light large wide btn btn-main"
                href="#"
              >
                Apply here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
