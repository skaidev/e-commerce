import React from "react";

const FooterComp = () => {
  return (
    <div>
      <footer className="pb-5">
        <div className="container">
          {/* subscribe to our newsletter box */}
          <div className="subscribe d-lg-flex align-items-center">
            <div className="col me-3">
              <h4>Subscribe to our News Letter</h4>
            </div>
            <div className="col">
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  className="form-control"
                />
                <span className="input-group-text" id="addon-wrapping">
                  <a href="/">Submit</a>
                </span>
              </div>
            </div>
          </div>
          {/* end of the news letter box */}

          {/* icons area */}
          <div className="icons pt-5 d-lg-flex text-center justify-content-evenly align-items-center">
            <div className="social">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter color"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="ububa-logo">
              <img src="/images/ububa logo.svg" alt="" />
            </div>
            <div className="payment">
              <img src="/images/paypal.png" alt="" className="me-3" />
              <img src="/images/visa.png" alt="" />
            </div>
          </div>
          {/* end of icon area */}

          {/* contact area */}
          <div className="contact-area text-light pt-5 d-flex justify-content-evenly">
            <div className="mail text-center">
              <i class="fas fa-envelope"></i>
              <p>Mail</p>
              <p className="number">+234 901 262 4162</p>
            </div>
            <div className="phone text-center">
              <i class="fas fa-phone-alt"></i>
              <p>Call</p>
              <p className="number">+234 901 262 4162</p>
            </div>
            <div className="location text-center">
              <i class="fas fa-map-marker-alt"></i>
              <p>Find Us</p>
              <p className="number">+234 901 262 4162</p>
            </div>
          </div>
          {/* end of contact area */}

          {/* copywright area */}
          <div className="copywright pt-5 text-center">
            <p>
              copywright©2021 <span>UBUBA</span>.All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
