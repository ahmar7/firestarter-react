import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <section className="coming-projects">
      <div className="projects-slider">
        <div className="projects-slider__info">
          <h2 className="title">FireStarter Projects</h2>
          <div className="projects-slider__pagination swiper-pagination-bullets">
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet" />
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
            <span className="swiper-pagination-bullet" />
          </div>
          <a className="round-button light large btn btn-main" href="/projects">
            All Projects
          </a>
        </div>
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events projects-slider-slides">
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-2544px, 0px, 0px)",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/Nwg4GiRmhrwuJuj7s5H3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>BUSD</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">FitBurn</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(32, 28, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/Nwg4GiRmhrwuJuj7s5H3/logo/Fitburn_Main_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/kNclf0AsrUW7vCXYvsCt"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDT</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Citizen Conflict</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(255, 248, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/kNclf0AsrUW7vCXYvsCt/logo/CitizemConflict_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/I1sKPnWlG7vbwJ8fvr7t"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/solana.png"
                        className="project-tag__image"
                      />
                      <span>SOLANA</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">WITLY</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(58, 181, 253)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/I1sKPnWlG7vbwJ8fvr7t/logo/witly_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/xTbUTF6UD8vNg0nAbNm3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/polygon.png"
                        className="project-tag__image"
                      />
                      <span>POLYGON</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Colexion</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(0, 4, 19)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/xTbUTF6UD8vNg0nAbNm3/logo/Colexion.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={0}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/Nwg4GiRmhrwuJuj7s5H3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>BUSD</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">FitBurn</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(32, 28, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/Nwg4GiRmhrwuJuj7s5H3/logo/Fitburn_Main_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={1}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/kNclf0AsrUW7vCXYvsCt"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDT</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Citizen Conflict</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(255, 248, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/kNclf0AsrUW7vCXYvsCt/logo/CitizemConflict_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={2}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/I1sKPnWlG7vbwJ8fvr7t"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/solana.png"
                        className="project-tag__image"
                      />
                      <span>SOLANA</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">WITLY</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(58, 181, 253)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/I1sKPnWlG7vbwJ8fvr7t/logo/witly_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={3}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/xTbUTF6UD8vNg0nAbNm3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/polygon.png"
                        className="project-tag__image"
                      />
                      <span>POLYGON</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Colexion</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(0, 4, 19)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/xTbUTF6UD8vNg0nAbNm3/logo/Colexion.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/Nwg4GiRmhrwuJuj7s5H3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>BUSD</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">FitBurn</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(32, 28, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/Nwg4GiRmhrwuJuj7s5H3/logo/Fitburn_Main_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/kNclf0AsrUW7vCXYvsCt"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/bsc.png"
                        className="project-tag__image"
                      />
                      <span>BSC</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDT</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Citizen Conflict</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(255, 248, 25)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/kNclf0AsrUW7vCXYvsCt/logo/CitizemConflict_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/I1sKPnWlG7vbwJ8fvr7t"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/solana.png"
                        className="project-tag__image"
                      />
                      <span>SOLANA</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">WITLY</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(58, 181, 253)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/I1sKPnWlG7vbwJ8fvr7t/logo/witly_logo.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              style={{ marginRight: "32px" }}
            >
              <a
                className="project-slide"
                href="/projects/xTbUTF6UD8vNg0nAbNm3"
              >
                <header className="project-slide__head">
                  <div className="project-slide__tags">
                    <span className="project-tag coming-soon project-tag--status">
                      <span>Coming Soon</span>
                    </span>
                    <span className="project-tag project-tag--network">
                      <img
                        src="/networks/polygon.png"
                        className="project-tag__image"
                      />
                      <span>POLYGON</span>
                    </span>
                    <span className="project-tag project-tag--token">
                      <span>USDC</span>
                    </span>
                  </div>
                  <h3 className="project-slide__name">Colexion</h3>
                </header>
                <div
                  className="project-slide__image"
                  style={{ backgroundColor: "rgb(0, 4, 19)" }}
                >
                  <img
                    src="https://storage.googleapis.com/firestarter-web-assets/projects/xTbUTF6UD8vNg0nAbNm3/logo/Colexion.png"
                    width={140}
                    height={140}
                    className="project-slide__logo rounded-circle"
                  />
                  <button
                    type="button"
                    className="round-button dark project-slide__button btn btn-main"
                  >
                    <span className="project-slide__link-image" />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <span className="projects-slider__nav-next">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5908 16.9993L12.9992 29.5867C12.4467 30.1378 11.5516 30.1378 10.9977 29.5867C10.4452 29.0356 10.4452 28.1404 10.9977 27.5893L22.5905 16.0007L10.9991 4.41211C10.4466 3.86099 10.4466 2.96584 10.9991 2.41333C11.5516 1.86222 12.4481 1.86222 13.0006 2.41333L25.5922 15.0006C26.1362 15.546 26.1362 16.4552 25.5908 16.9993Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Slider;
