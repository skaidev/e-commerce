import React from "react";

const HeaderComp = () => {
  return (
    <>
      <header>
        <div className="top">
          <div className=" top-content container d-flex align-items-lg-center justify-content-md-between">
            <div className="left d-flex align-items-md-center flex-column flex-md-row">
              <div className="d-flex">
                <a href="/" className="d-flex align-items-center me-2">
                  <button className="btn">
                    English<i className="fas fa-chevron-down ms-1"></i>
                  </button>
                </a>
                <a href="/" className="d-flex align-items-center">
                  <button className="btn">
                    Currency<i className="fas ms-1 fa-chevron-down"></i>
                  </button>
                </a>
              </div>
              <div className="social-media d-none d-md-flex">
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="p-0 m-0 d-md-flex d-none align-items-center phone">
                <i className="fas fa-phone-alt me-3"></i>
                <span>+234</span> <span>901</span> <span>262</span>
                <span>4162</span>
              </p>
            </div>
            <div className="right d-flex flex-row align-items-center ">
              <a href="/" className="about-us">
                About Us
              </a>
              <a href="/" className="contact-us">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComp;
