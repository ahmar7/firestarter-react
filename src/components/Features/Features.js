import React from "react";
import "./Features.css";
const Features = () => {
return(
     <section className="features-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="features-item features-item--buy">
            <div className="features-item__content">
              <h4 className="features-item__title">Buy FLAME</h4>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADeUExURUdwTCOtjySvjyOvkiOvkSKvkSCvjyOvkSCvjyKvkSKvkiKtjyKujyOujyOvjyOvkiKtjyOvkiKxkySvjyKvkyKvkCOujySvjyKvjyOukSKvkCCrjyOvkCSrjyOujyOvkCStjyKxkyCvjyOsjyCsjyOvkCOvjyCvjyG1lCOvkf///5HXyK3h1j65n0y+peP18uT18vL6+PH6+FrDrDC0mD65nnXNuq3h1dbw61rDrbrm3Ey+pnbNuoPSwcjr45/cz57cz2jIs+P18TG0mMjr5Kzh1j+5nmjItOT18brm3bFIgwEAAAApdFJOUwBgcJ/fzxDvIN+PgJCQYK9wv2+Af9+gQICgz0CvQLC/gH9AUFCfUFAfb6gjEQAAAoNJREFUWMOtl2d7mzAQgMHGRuDVNMNpkjbdrWzcEg8aO3t1/P8/VDMlne4kSHvf4OF90TydHIcI5oajTsC3EXRGvY/MaRTHYYbK4bWP69LdPZ+j4bnsX/A0/NCqeGnA81YYcbbDreGx5/++6McLig95zdjD+TavHW2M7/AG0Wn4//Wvla0N7wz47PtkMpmClyEYfxuvG5S5YL6V1wy+vB7E1rnabC5xXjPsCN6tXp6nH/7Aec1QdYJVDbjMP1zgPDT4XW0FRuA7wENDTxtBINB4YCiaIEYACAR/doMbemAKVIHEf+PTyiAPsZ/y7zkuUHhOGF6DTSAJAC8bbgTQV3sgCTReNixFetrOAccECC8ZxDrhX50PmADlheFCvHKdHiKIcL40/ObyIIwQwYTgc8OjnFzeqJkswvnZNCq36HLxE+S2gBaU/N18+3C/xE8Jh5OCkn/AM1IRtKDq/zp/vm8qmJeCu/z5vKmgMjycZY9PhMAwiKUhyRqwIgbRNI2lYXYbXRWTsFxfgGk0LqQ5tpA26kLqI4KnmDDkS/layUkuuplwA7KZvlDbGTNg25mRCUU3iISykhOKMghySoOGKZaYP20FYyqpqgaUz5Kq41NpXTbgvJedC4fkwSIMEX6wDPPalD7aYsvRVpQIh/ThGhsP10FZHldNSLTjPTbwomZtVe+u089u5QIjpguMoShRRImcPP5J1BInpnivbpEV1yiypE6QBphUW2qhOLAZIP8WlqqvTKXuIoGnwsH/L7YtbbD+P43duvyAurK06l15WoZLV2DnT803v2Hw/N8XjRiYLp673Rp3V0a1oh6exfhAc+z3x80u8Oxz7+RoP0OPTvr0tfsvqm4F7TgnytkAAAAASUVORK5CYII="
                  className="rounded-circle"
                />
                <span>KUCOIN</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALxUExURUdwTP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Dw8yYvcUGKyv///xYfQhYfQ/yLzA8fZvz9/kKLy0eNzFuVz3Gf1RYfRlKSzejx+WOY0Wuc0yQtbxokUmaZ0m6e1FiY0CIraT+FxDx+u06QzXOh1RstVOz0+vf5/B0mWWKX0CEqZHqk13ii1qXI51+W0BclaRAfXRMfTyQtbCAoX21yiXWh1qeruFqa0V+c0lWSzlSW0BkjR7XR60hPbPL3+8HEzo643xonaxIhVygzdUSMy0uQzejp7UCJyfDw8/v7/YGo2X+n2Geb04Sp2n2m11iTz3Gn2J7D5NTl897p9IiMnhwobClPgA8fY+Xw+Hqt2hchSr/By9jZ4E5Ub/Ly9Gyl1y1KjBolStnn9dLT23R5j36w2zJhlGOe1MTb7+zt8Ie03fH2+6LF5czg8c3O1i01VbrU6zM7W9/f5CE9aS05eSMrTkZOhR8qbjRrpThur2mi1ZaaujtDZJygryVGdLi7xhojT2qb0nap2fb2+CAoSuDi56nK536ClpKVppeaq8fJ0jlCYTc/dF1klt7f6ZygvjdzreXm7hoqUNna5snL3KGmwbq90trc4h40XTM7azhzrj9IZjJbnTJXmZrA4yQ7Y1dcdpebs+Pu9zNmnmmd07K5zSpUiLK1wOLj6IKGmq/O6VpgenZ8kLa4w0VMdImNsSdJeKuuyMfJ1uPu+H2DqnR5pHR6payvvEaAvkZsmidKeWZrgzBUlYGy3FVcdUqCt0p/tCtDhD9He+Xu98bZ7p+61TlZhExtljhxqnmJo5e31zp4s3I0JAgAAAA5dFJOUwDN/B/gIBsEF57wJG6Krb0xXH4NpDtn60Q/cph3EN3y4/QTVDZhjJLb2dDA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"
                  className="rounded-circle"
                />
                <span>QUICKSWAP</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--lock">
            <div className="features-item__content">
              <h4 className="features-item__title">Lock FLAME</h4>
              <p className="features-item__text">
                Lock FLAME and
                <span className="purple-text fw-bold">
                  get access to our upcoming IMOs
                </span>
                on FireStarter
              </p>
              <a
                className="round-button light large btn btn-main"
                href="#"
              >
                LOCK FLAME
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--earn">
            <div className="features-item__content">
              <h4 className="features-item__title">Earn FLAME</h4>
              <p className="features-item__text">
                Earn
                <span className="purple-text fw-bold">up to 800% APY </span>
                in $FLAME rewards by staking your LP tokens
              </p>
              <a
                className="round-button light large btn btn-main"
                href="#"
              >
                EARN FLAME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Features;
