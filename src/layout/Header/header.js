import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header container-fluid">
        <nav className="navbar navbar-expand navbar-light">
          <span className="navbar-brand">
            <a href="/">
              <img
                src="https://firestarter.fi/static/media/logo.fcbc44c0.svg"
                alt="Logo"
                className="d-inline-block align-top"
              />
            </a>
          </span>
          <div className="justify-content-end navbar-collapse collapse">
            <a href="/leaderboard" className="nav-link">
              Leaderboard
            </a>
            <a href="/metaverse-nft" className="nav-link">
              Metaverse NFT
            </a>
            <a href="/projects" className="nav-link">
              Projects
            </a>
            <div className="nav-dropdown dropdown">
              <button
                type="button"
                className="round-button light header__nav-button dropdown-toggle btn btn-main"
              >
                ACCOUNT
              </button>
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
        </nav>
      </header>
    </div>
  );
};

export default Header;
