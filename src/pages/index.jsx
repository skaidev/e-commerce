import React from "react";
import NavComp from "../components/NavComp";
import SliderComp from "../components/SliderComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <div>
      <NavComp />
      <div className="main-content">
        <div className="slider-content">
          <SliderComp />
        </div>
        <div className="services container">
          <div className="container">
            <div className="row row-cols-4">
              {serviceCard.map((card) => (
                <div className="col" key={card.id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-content d-flex align-items-center">
                        <img src={`./images/service ${card.img}.png`} alt="" />
                        <div className="card-text ms-2">
                          <h6 className="card-title">{card.title}</h6>
                          <p>{card.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end of the services section */}

        {/* trending section of the site */}
        <div className="trending">
          <div className="container">
            <div className="trending-heading">
              <h3>Trending</h3>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-3">
              {/* left hand side area of the trending section */}
              <div className="trending-left-area py-2">
                <div className="container">
                  <div className="col">
                    <div className="card bg-transparent border-0 h-100">
                      <div className="discount align-self-end">
                        <p>-10%</p>
                      </div>
                      <div className="image align-self-center">
                        <img
                          src="/images/echo.png"
                          alt=""
                          className="card-img"
                        />
                      </div>
                      <div className="card-body">
                        <p className="echo-text">
                          Ububa’s Echo Dot (4th Gen) Smart Speaker
                        </p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="price">
                              <span>
                                <del>$44.99</del>
                              </span>{" "}
                              $44.99
                            </p>
                          </div>
                          <div className="shop-btn">
                            <a href="/" className="shop btn btn-dark">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right hand side of the trending area */}
              <div className="trending-right-area flex-fill p-1 py-2">
                <div className="p-1 py-3 h-100">
                  <div className="d-flex clip-area mb-3 flex-column h-50 flex-lg-row flex-fill">
                    <div className="left-side-col flex-fill">
                      <div className="container">
                        <p className="echo-text">
                          Ububa’s Echo Dot (4th Gen) <br /> Smart Speaker
                        </p>
                        <p className="price">
                          <span>
                            <del>$44.99</del>
                          </span>{" "}
                          $44.99
                        </p>
                      </div>
                    </div>
                    <div className="right-side-col flex-fill d-flex flex-column justify-content-between align-items-end">
                      <div className="discount">
                        <p>-10%</p>
                      </div>
                      <div className="shop-btn">
                        <a href="/" className="shop btn btn-dark">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-50">
                    <div className="row h-100 g-3  p-0 m-0 row-cols-1 row-cols-md-2">
                      <div className="col ">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="discount text-end">
                              <p>-10%</p>
                            </div>
                            <div>
                              <p className="echo-text">
                                Ububa’s Echo Dot (4th <br /> Gen) Smart Speaker
                              </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="price">
                                  <span>
                                    <del>$44.99</del>
                                  </span>{" "}
                                  $44.99
                                </p>
                              </div>
                              <div className="shop-btn ">
                                <a href="/" className="shop btn btn-dark">
                                  Shop Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="discount text-end">
                              <p>-10%</p>
                            </div>
                            <div>
                              <p className="echo-text">
                                Ububa’s Echo Dot (4th <br /> Gen) Smart Speaker
                              </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="price">
                                  <span>
                                    <del>$44.99</del>
                                  </span>{" "}
                                  $44.99
                                </p>
                              </div>
                              <div className="shop-btn">
                                <a href="/" className="shop btn btn-dark">
                                  Shop Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of the trending section */}

        {/* brand partners menu */}
        <div className="brand-partners pb-3">
          <div className="col">
            <div className="brand-partners-heading text-center pt-3">
              <h4 className="pb-1">Brand Partners</h4>
            </div>
            <div className="row mx-auto justify-content-center align-items-center text-center container">
              {brandPartner.map((card) => (
                <div
                  className="image-box col d-flex justify-content-center align-items-center m-2 "
                  style={{
                    width: "269px",
                    height: "149px",
                    background: `url("/images/brand_${card.img}.png")`,
                  }}
                  key={card.id}
                >
                  <h5>{card.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default HomePage;

const serviceCard = [
  {
    id: 1,
    img: 1,
    title: "100% warranty",
    text: "You have 30 days to return",
  },
  {
    id: 2,
    img: 2,
    title: "Fast Delivery",
    text: "Dalivery in less than 24hrs",
  },
  {
    id: 3,
    img: 3,
    title: "Secured Payment",
    text: "We ensure secure transactions",
  },
  {
    id: 4,
    img: 4,
    title: "24 hour Support",
    text: "contact us 24hrs a day",
  },
];

const brandPartner = [
  {
    id: 1,
    img: 1,
    title: "Asus",
  },
  {
    id: 2,
    img: 2,
    title: "Sony",
  },
  {
    id: 3,
    img: 3,
    title: "Apple",
  },
  {
    id: 4,
    img: 4,
    title: "HP",
  },
];
