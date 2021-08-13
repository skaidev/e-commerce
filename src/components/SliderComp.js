import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SliderComp = () => {
  return (
    <div className="background overflow-hidden pb-3">
      <Carousel>
        <Carousel.Item>
          <div className="slide-one">
            <div className="container">
              <div className="carousel-content row row-cols-2">
                <div className="left-content d-flex flex-column align-items-start col-5 justify-content-center">
                  <a href="/" className="ftwo discount">
                    Trending Discounts
                  </a>
                  <h2>
                    <span>Try Next Levels </span> <br />
                    smart gadgets
                  </h2>
                  <p className="ftwo">
                    he Union Jack, or Union Flag, is the de facto national flag
                    of <br />
                    the United Kingdom. Though no law has been passed <br />{" "}
                    officially making effectively
                  </p>
                  <a href="/" className="btn px-3 shop-now">
                    Shop Now
                  </a>
                </div>
                <div className="right-content col">
                  <img
                    className="carousel-image"
                    src="/images/item.png"
                    alt="First slide"
                  />
                </div>
              </div>
              <Carousel.Caption></Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-two">
            <div className="container">
              <div className=" carousel-content-two gap-2 d-flex flex-column-reverse flex-md-row">
                <div className="left-content-two d-flex flex-column align-items-start justify-content-center">
                  <a href="/" className="ftwo discount">
                    Trending Discounts
                  </a>
                  <h2>
                    <span>Try Next Levels </span> <br />
                    smart gadgets
                  </h2>
                  <p className="ftwo">
                    he Union Jack, or Union Flag, is the de facto national flag
                    of <br />
                    the United Kingdom. Though no law has been passed <br />{" "}
                    officially making effectively
                  </p>
                  <a href="/" className="btn px-3 shop-now">
                    Shop Now
                  </a>{" "}
                </div>
                <div className="right-content-two my-5">
                  <div className="carousel-image pt-5 pb-5">
                    <img
                      className="img-fluid"
                      src="/images/ubu img 2.png"
                      alt="Second slide"
                      style={{ height: "416px", width: "591px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderComp;
