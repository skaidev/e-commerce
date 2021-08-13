import React from "react";

const NavComp = () => {
  return (
    <>
      <div className="navigation">
        <div className="container nav-content">
          <nav className="navbar navbar-expand-lg navbar-light pb-0 pt-0">
            <div className="container-fluid" style={{ height: "70px" }}>
              <a className="navbar-brand" href="/">
                <img src="/images/ububa logo.svg" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navlist bg-white collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      <img src="/images/Group.svg" alt="" />
                    </a>
                  </li>
                  <div className="col-auto inpu">
                    <label
                      className="visually-hidden"
                      for="autoSizingInputGroup"
                    >
                      search products, categories
                    </label>
                    <div className="input-group">
                      <div className="input-group-text one">
                        <button className="btn">
                          All Categories <i className="fas fa-chevron-down"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="search products, categories"
                      />
                      <div className="input-group-text two">
                        <button className="btn">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
                <div className="navicons">
                  <ul className="d-flex list">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fas fa-shopping-bag"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="far fa-question-circle question"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="far fa-user-circle profile"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavComp;
