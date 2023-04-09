import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [drop, setDrop] = useState(false);
  const [nav, setNav] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  let navToggle = () => {
    if (nav === true) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  return (
    <div>
      <div onClick={toggleDrop} className={drop ? "overlay-active" : ""}></div>
      <header className="header container-fluid">
        <nav className="navbar navbar-expand navbar-light">
          <span className="navbar-brand">
            <Link to="/">
              <img
                src="https://firestarter.fi/static/media/logo.fcbc44c0.svg"
                alt="Logo"
                className="d-inline-block align-top header-logo"
              />
            </Link>
          </span>
          <div
            className={
              nav
                ? "justify-content-end navbar-collapse collapse show-nav  full-height"
                : "justify-content-end navbar-collapse collapse show-nav"
            }
          >
            <a href="#" className="nav-link">
              Leaderboard
            </a>
            <a href="#" className="nav-link">
              Metaverse NFT
            </a>
            <Link to="/projects" className="nav-link">
              
                Projects
               
            </Link>
            <div className="nav-dropdown dropdown">
              <button
                type="button"
                onClick={toggleDrop}
                className="round-button light header__nav-button dropdown-toggle btn btn-main"
              >
                ACCOUNT
              </button>

              <div
                className={
                  drop
                    ? "nav-dropdown__menu dropdown-menu show"
                    : "dropdown-menu hidden"
                }
                style={{ margin: "0px" }}
              >
                <a href="#" className="nav-dropdown__item dropdown-item">
                  LOCKUP
                </a>
                <a href="#" className="nav-dropdown__item dropdown-item">
                  LOCKUP <span className="purple-text">2.0</span>
                </a>
                <a href="#" className="nav-dropdown__item dropdown-item">
                  STAKING
                </a>
                <a href="#" className="nav-dropdown__item dropdown-item">
                  LINKING WALLETS
                </a>
                <a href="#" className="nav-dropdown__item dropdown-item">
                  MY PORTFOLIO
                </a>
              </div>
            </div>
            <div
              role="group"
              className="network-switcher__dropdown dropdown btn-group"
            >
              <button
                id="network-switcher-split"
                type="button"
                className="round-button dark network-switcher__toggle disabled dropdown-toggle dropdown-toggle-split btn btn-main"
              >
                --
              </button>
              <button
                type="button"
                className="round-button dark header__connect-wallet btn btn-main"
              >
                <span>CONNECT</span>
              </button>
            </div>
          </div>
          <div className="hamburger-ico hide-desk">
            <i className="fa-solid fa-bars" onClick={navToggle}></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
