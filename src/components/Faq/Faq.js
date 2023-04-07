import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  let toggleFaq1 = () => {
    if (faq1 === false) {
      setFaq1(true);
    } else {
      setFaq1(false);
    }
  };
  let toggleFaq2 = () => {
    if (faq2 === false) {
      setFaq2(true);
    } else {
      setFaq2(false);
    }
  };
  let toggleFaq3 = () => {
    if (faq3 === false) {
      setFaq3(true);
    } else {
      setFaq3(false);
    }
  };
  let toggleFaq4 = () => {
    if (faq4 === false) {
      setFaq4(true);
    } else {
      setFaq4(false);
    }
  };
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-column justify-content-center row">
          <div className="text-center col-xxl-10 col-xl-11 col-md-12">
            <h2 className="title">FAQ</h2>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq1}
                    className={faq1 ? "active btn btn-main" : " btn btn-main"}
                  >
                    How can projects use FireStarter?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq1 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The FireStarter platform allows early-stage crypto
                      projects to raise funds through our IMO launch process. In
                      utilizing the FireStarter Networks, projects are able to
                      reach massive audiences and fund at an unmatched pace. We
                      tokenize culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq2}
                    className={faq2 ? "active btn btn-main" : " btn btn-main"}
                  >
                    What is Token Burn?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq2 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      A token burn is done by permanently removing some tokens
                      from circulation, thus increasing scarcity. Unlocking or
                      unstacking before the 30 day mark will result in
                      penalties. A % of penalties if burned to increase scarcity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq3}
                    className={faq3 ? "active btn btn-main" : " btn btn-main"}
                  >
                    What is the $FLAME Token Address?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq3 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The $FLAME Token Address:
                      0x22e3f02f86bc8ea0d73718a2ae8851854e62adc5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq4}
                    className={faq4 ? "active btn btn-main" : " btn btn-main"}
                  >
                    How do I lock $FLAME?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq4 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      <b>Step 1.</b> Go to firestarter.fi
                      <br />
                      <b>Step 2.</b> Connect your Wallet
                      <br />
                      <b>Step 3.</b> Go to Accounts Page
                      <br />
                      <b>Step 4.</b> Scroll Down to Lock Section
                      <br />
                      <b>Step 5.</b> Determine amount of $FLAME to be locked and
                      click Approve to make sure enough funds are available to
                      participate.
                      <br />
                      <b>Step 6.</b> Once approved, you can then lock your
                      $FLAME with the Lock Button and establish your Tier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="round-button light large  btn btn-main" href="#">
              See all Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
