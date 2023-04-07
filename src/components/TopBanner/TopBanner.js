import React from "react";
import './TopBanner.css'
const TopBanner = () => {
  return (
    <section className="top-banner">
      <div className="background">
        <div className="top-banner__shadow-top" />
        <div className="top-banner__space" />
        <img
          src="https://firestarter.fi/static/media/spaceman.9782e999.png"
          className="top-banner__spaceman"
          style={{ transform: "translate3d(1e-5px, -25px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-left.6452247d.png"
          className="top-banner__cards-left"
          style={{ transform: "translate3d(1e-5px, 47px, 1e-5px)" }}
        />
        <img
          src="https://firestarter.fi/static/media/cards-right.37f515ba.png"
          className="top-banner__cards-right"
          style={{ transform: "translate3d(1e-5px, -37px, 1e-5px)" }}
        />
        <div className="top-banner__shadow-bottom" />
      </div>
      <div className="container">
        <div className="hero-row row">
          <div className="hero-row__main text-center">
            <h1 className="title">
              A Launchpad for AI and
              <br />
              Initial Metaverse Offerings
            </h1>
            <p className="subtitle">Own The Future</p>
            <div className="hero-buttons">
              <button
                disabled
                type="button"
                className="round-button light large btn btn-main"
              >
                FitBurn Whitelist
              </button>
              <div className="buy-flame-dropdown dropdown">
                <button
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                  className="dropdown-toggle btn btn-primary"
                >
                  Buy $Flame Tokens
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
