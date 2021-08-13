import React from "react";

const Products = () => {
  return (
    <div>
      {/* best seller product area */}
      <div className="bestseller-group pt-5">
        <div className="container">
          <div className="col">
            <div className="bestseller-content">
              <div className="item-heading d-flex">
                <div className="main">
                  <a href="/">Best Seller</a>
                </div>
                <div className="not-active">
                  <a href="/">Newest</a>
                </div>
                <div className="not-active">
                  <a href="/">Hot Deals</a>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-0">
                {sellerProducts.map((card) => (
                  <div className="col p-0" key={card.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        <div
                          className="product-image text-center light-gray"
                          // style={{ width: "211px", height: "211px" }}
                        >
                          <img
                            src={`/images/products/prod_${card.img}.png`}
                            alt=""
                            className=" img-fluid"
                          />
                        </div>
                        <p className="echo-text">{card.item}</p>
                        <div className="ratings">
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                        </div>
                        <div>
                          <p className="price">
                            <span>
                              <del>$44.99</del>
                            </span>{" "}
                            $44.99
                          </p>
                        </div>
                        <div className="d-md-flex">
                          <div className="buy-now text-center">
                            <a href="/" className="buy">
                              Buy Now
                            </a>
                          </div>
                          <div className="icons pt-2">
                            <a href="/">
                              <i className="fas fa-heart text-danger"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="see-all text-end mt-2">
                <a href="/">See All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of the best seller menu area */}

      {/* new arrivals products */}
      <div className="new-arrivals pt-5 pb-5">
        <div className="container">
          <div className="new-arrival-content">
            <div className="item-heading">
              <div className="main d-inline-block">
                <a href="/">New Arrivals</a>
              </div>
            </div>
            {/* left and right hand side contents flexed */}
            <div className="row d-flex g-0">
              {/* left hand side contents */}
              <div className="col col-lg-6">
                <div className="left-arrival">
                  <div className="card new-arrival-card">
                    <div className="card-body text-center">
                      <div className="save ms-auto d-flex justify-content-center align-items-center">
                        <p>
                          Save <br /> 20%
                        </p>
                      </div>
                      <div className="image align-self-center">
                        <img
                          src="/images/ech.png"
                          alt=""
                          className=""
                          // style={{ width: "316px", height: "319px" }}
                        />
                      </div>
                      <p className="new-echo">
                        Echo Dot <br />
                        <span>(Smart Speaker)</span>
                      </p>
                      <p className="price">
                        $44.99{" "}
                        <span>
                          <del>$44.99</del>
                        </span>
                      </p>
                      <div className="buy-now text-center d-inline-block">
                        <a href="/" className="buy">
                          Buy Now
                        </a>
                      </div>
                      <p className="hurry mt-4 mb-4">Hurry! Offer Ends In</p>
                      <div className="time d-flex justify-content-evenly">
                        <p className="timer">
                          <span>6</span>
                          <br />
                          <br />
                          <br />
                          Days
                        </p>
                        <p>:</p>
                        <p className="timer">
                          <span>12</span>
                          <br />
                          <br />
                          <br />
                          HR
                        </p>
                        <p>:</p>
                        <p className="timer">
                          <span>09</span>
                          <br />
                          <br />
                          <br />
                          Min
                        </p>
                        <p>:</p>
                        <p className="timer">
                          <span>10</span>
                          <br />
                          <br />
                          <br />
                          Sec
                        </p>
                      </div>
                      <p className="available">22 Available</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of left hand side contents */}

              {/* right hand side contents */}
              <div className="col col-lg-6">
                <div className="right-arrival">
                  <div className="row  row-cols-lg-2 g-0">
                    {newArrivals.map((card) => (
                      <div className="col p-0" key={card.id}>
                        <div className="card h-100">
                          <div className="card-body">
                            <div className="product-image text-center light-gray">
                              <img
                                src={`/images/products/arrival_${card.img}.png`}
                                alt=""
                                className="card-img"
                                style={{ width: "186px", height: "186px" }}
                              />
                            </div>
                            <p className="echo-text">{card.item}</p>
                            <div className="ratings">
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                            <div>
                              <p className="price">
                                $44.99{" "}
                                <span>
                                  <del>$44.99</del>
                                </span>
                              </p>
                            </div>
                            <div className="d-md-flex">
                              <div className="buy-now text-center">
                                <a href="/" className="buy">
                                  Buy Now
                                </a>
                              </div>
                              <div className="icons pt-2">
                                <a href="/">
                                  <i className="fas fa-heart text-danger"></i>
                                </a>
                                <a href="/">
                                  <i className="fas fa-shopping-bag"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of new arrival products */}

      {/* gamepad controller section */}
      <div className="col controller-area">
        <div className="container">
          <div className="controller-box pt-2 d-md-flex">
            <div className="left-content me-4 d-flex flex-column justify-content-center align-items-start">
              <a href="/" className="gaming-accessories-btn d-inline-block">
                Gaming Accessories
              </a>
              <h2>Game Controller</h2>
              <p>
                he Union Jack, or Union Flag, is the de facto national flag of{" "}
                <br /> the United Kingdom. Though no law has been passed <br />{" "}
                officially making effectively
              </p>
              <p className="price">
                $44.99{" "}
                <span>
                  <del>$44.99</del>
                </span>
              </p>
              <div className="buy-now">
                <a href="/">Buy Now</a>
              </div>
            </div>
            <div className="right-content">
              <img src="/images/gamepad.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* end of the game controller area */}

      {/* recently viewed section */}
      <div className="recently-viewed pb-5">
        <div className="container">
          <div className="recently-viewed-content pt-5">
            <div className="item-heading d-flex justify-content-between pb-4">
              <div className="main d-inline-block">
                <a href="/">Recently Viewed</a>
              </div>
              <div className="see-all">
                <a href="/">See All</a>
              </div>
            </div>
            {/* the recently viewed card section */}
            <div className="card-products pb-5">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {recentlyViewed.map((card) => (
                  <div className="col" key={card.id}>
                    <div className="card h-100">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="card-body">
                            <p className="echo-text">{card.title}</p>
                            <p className="echo-text">Smart Speaker</p>
                            <p className="echo-text">High Sound</p>
                            <p className="echo-text">Home and office</p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card-body">
                            <div>
                              <img
                                src={`/images/products/recent_${card.img}.png`}
                                alt=""
                              />
                            </div>
                            <p className="price">
                              $44.99{" "}
                              <span>
                                <del>$44.99</del>
                              </span>
                            </p>
                            <div className="ratings">
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of the recently viewed section */}

      {/* brand partners second section */}
      <div className="brand-two pb-5">
        <div className="container">
          <div className="row row-cols-lg-2">
            {brandPartners.map((card) => (
              <div className="col  mb-2" key={card.id}>
                <div className="card border-0 h-100">
                  <div className="card-body d-flex">
                    <div className="d-flex flex-column-reverse flex-md-row flex-fill justify-content-md-between">
                      <div className="brand-content flex-fill d-flex flex-column align-items-start justify-content-center">
                        <h2>Brand Partners</h2>
                        <p>
                          he Union Jack, or Union Flag, <br />
                          United Kingdom
                        </p>
                        <div className="buy-now text-center d-inline-block">
                          <a href="/" className="buy">
                            Buy Now
                          </a>
                        </div>
                      </div>
                      <div className="brand-image">
                        <img
                          src="/images/ech.png"
                          alt=""
                          className="d-block mx-auto"
                          //style={{ width: "170px", height: "171px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of brand partners section */}

      {/* smart watches section */}
      <div className="smart-watches pt-5 pb-5">
        <div className="container">
          <div className="col">
            <div className="smartwatches-content">
              <div className="item-heading d-flex align-items-center justify-content-between">
                <div className="main">
                  <a href="/">Smart Watches</a>
                </div>
                <div className="see-all align-self-end mb-2">
                  <a href="/">See All</a>
                </div>
              </div>
              <div className="row row-cols-md-2 row-cols-lg-4 g-0">
                {smartWatches.map((card) => (
                  <div className="col p-0" key={card.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="product-image align-self-center">
                          <img
                            src={`/images/products/smart_${card.img}.png`}
                            alt=""
                            className="card-img"
                          />
                        </div>
                        <p className="echo-text">{card.item}</p>
                        <div className="ratings">
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                        </div>
                        <div>
                          <p className="price">
                            $44.99{" "}
                            <span>
                              <del>$44.99</del>
                            </span>
                          </p>
                        </div>
                        <div className="d-md-flex">
                          <div className="buy-now text-center">
                            <a href="/" className="buy">
                              Buy Now
                            </a>
                          </div>
                          <div className="icons pt-2">
                            <a href="/">
                              <i className="fas fa-heart text-danger"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of smart watches section */}

      {/* the banner box */}
      <div className="banner pt-5 pb-5">
        <div className="container">
          <div className="row row-cols-2">
            {bannerBox.map((card) => (
              <div className="col" key={card.id}>
                <div className="card border-0">
                  <div className="card-body d-flex align-items-center justify-content-center ">
                    <div className="banner-content">
                      <h5>Banner</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of the banner box section */}

      {/* the latest products section */}
      <div className="latest-products pb-5">
        <div className="container">
          <div className="row">
            <div className="col col-md-12 col-lg-3">
              {/* left column of latest products */}
              <div className="left-products">
                <div className="item-heading d-flex justify-content-between">
                  <div className="products">
                    <h3>Latest Products</h3>
                  </div>
                  <div className="icons">
                    <a href="/">
                      <i class="fas fa-chevron-left"></i>
                    </a>
                    <a href="/">
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
                {/* list group items */}
                <ul className="list-group">
                  {sampleProducts.map((card) => (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={card.id}
                    >
                      <div>
                        <img
                          src="/images/ech.png"
                          alt=""
                          style={{ width: "90px", height: "90px" }}
                        />
                      </div>
                      <div className="sample align-self-center">
                        <h6>
                          <a href="/">Sample Product</a>
                        </h6>
                        <div className="ratings">
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                        </div>
                        <div>
                          <p className="price">$44.99</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  <li className="list-group-item last p-0">
                    <div
                      className="dark transparent-blue"
                      style={{ height: "41px" }}
                    ></div>
                    <div
                      className="light light-gray"
                      style={{ height: "231px" }}
                    ></div>
                  </li>
                </ul>
                {/* end of the list group */}
              </div>
              {/* end of left column section */}
            </div>
            <div className="col col-lg-9">
              {/* right section of latest products */}
              <div className="right-products">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="latest-product-content d-flex  flex-column-reverse flex-md-row justify-content-between">
                        <div className="combo-item">
                          <div className="off d-flex justify-content-center align-items-center">
                            <p>
                              20% <br />
                              off
                            </p>
                          </div>
                          <h2>Gadget Combo</h2>
                          <p>
                            he Union Jack, or Union Flag, <br />
                            United Kingdom
                          </p>
                          <div className="buy-now text-center d-inline-block">
                            <a href="/" className="buy">
                              Buy Now
                            </a>
                          </div>
                        </div>
                        <div>
                          <img
                            src="/images/combo.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mb-4">
                  {comboOne.map((card) => (
                    <div className="col p-0" key={card.id}>
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="product-image text-center light-gray">
                            <img
                              src={`/images/products/combo_${card.img}.png`}
                              alt=""
                              className="card-img"
                              style={{ width: "176px", height: "176px" }}
                            />
                          </div>
                          <p className="echo-text">{card.item}</p>
                          <div className="ratings">
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                          </div>
                          <div>
                            <p className="price">
                              $44.99{" "}
                              <span>
                                <del>$44.99</del>
                              </span>
                            </p>
                          </div>
                          <div className="d-md-flex">
                            <div className="buy-now text-center">
                              <a href="/" className="buy">
                                Buy Now
                              </a>
                            </div>
                            <div className="icons pt-2">
                              <a href="/">
                                <i className="fas fa-heart text-danger"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-shopping-bag"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-0">
                  {comboTwo.map((card) => (
                    <div className="col p-0" key={card.id}>
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="product-image text-center light-gray">
                            <img
                              src={`/images/products/combo_${card.img}.png`}
                              alt=""
                              className="card-img"
                              style={{ width: "176px", height: "176px" }}
                            />
                          </div>
                          <p className="echo-text">{card.item}</p>
                          <div className="ratings">
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-star"></i>
                            </a>
                          </div>
                          <div>
                            <p className="price">
                              $44.99{" "}
                              <span>
                                <del>$44.99</del>
                              </span>
                            </p>
                          </div>
                          <div className="d-md-flex">
                            <div className="buy-now text-center">
                              <a href="/" className="buy">
                                Buy Now
                              </a>
                            </div>
                            <div className="icons pt-2">
                              <a href="/">
                                <i className="fas fa-heart text-danger"></i>
                              </a>
                              <a href="/">
                                <i className="fas fa-shopping-bag"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of latest products */}

      {/* fast seller section */}
      <div className="fast-sellers pt-5">
        <div className="container">
          <div className="col">
            <div className="fast-content">
              <div className="item-heading d-flex justify-content-between">
                <div className="main">
                  <a href="/">Fast Sellers</a>
                </div>
                <div className="see-all align-self-end mb-2">
                  <a href="/">See All</a>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0">
                {fastSellers.map((card) => (
                  <div className="col p-0" key={card.id}>
                    <div className="card h-100">
                      <div className="card-body">
                        <div
                          className="product-image text-center mx-auto light-gray"
                          //style={{ width: "215px", height: "215px" }}
                        >
                          <img
                            src={`/images/products/fast_${card.img}.png`}
                            alt=""
                            className="card-img img-fluid"
                            style={{ width: "176px", height: "176px" }}
                            // check style for size
                          />
                        </div>
                        <p className="echo-text">{card.item}</p>
                        <div className="ratings">
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                          <a href="/">
                            <i className="fas fa-star"></i>
                          </a>
                        </div>
                        <div>
                          <p className="price">
                            $44.99{" "}
                            <span>
                              <del>$44.99</del>
                            </span>
                          </p>
                        </div>
                        <div className="d-md-flex">
                          <div className="buy-now text-center">
                            <a href="/" className="buy">
                              Buy Now
                            </a>
                          </div>
                          <div className="icons pt-2">
                            <a href="/">
                              <i className="fas fa-heart text-danger"></i>
                            </a>
                            <a href="/">
                              <i className="fas fa-shopping-bag"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

const sellerProducts = [
  {
    id: 1,
    img: 1,
    item: "Ububa's Echo Dot [4th Gen] smart speaker",
  },
  {
    id: 2,
    img: 2,
    item: "ComfoBuds Pro True Wireless Earbuds",
  },
  {
    id: 3,
    img: 3,
    item: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
  },
  {
    id: 4,
    img: 4,
    item: "Anker PowerCore III Elite Laptop Battery Pack",
  },
  {
    id: 5,
    img: 5,
    item: "Ekster Parliament Smart Wallet",
  },
  {
    id: 6,
    img: 6,
    item: "Tribit StormBox Micro Waterproof Bluetooth Speaker",
  },
  {
    id: 7,
    img: 7,
    item: "Soundcore Life Q30 Wireless Headphones by Anker",
  },
  {
    id: 8,
    img: 8,
    item: "Jabra Elite Active 75t Wireless Earbuds",
  },
];

const newArrivals = [
  {
    id: 1,
    img: 1,
    item: "Zyllion Shiatsu Back and Neck Massager",
  },
  {
    id: 2,
    img: 2,
    item: "Philips Somneo Sleep and Wake-Up Light",
  },
  {
    id: 3,
    img: 3,
    item: "Apple HomePod mini Smart Speaker",
  },
  {
    id: 4,
    img: 4,
    item: "Soundcore Life Q30 Wireless Headphones by Anker",
  },
];

const recentlyViewed = [
  {
    id: 1,
    img: 1,
    title: "Ububa’s Echo Dot (4th Gen) Smart Speaker",
  },
  {
    id: 2,
    img: 2,
    title: "Zyllion Shiatsu Back and Neck Massager",
  },
  {
    id: 3,
    img: 3,
    title: "Soundcore Life Q30 Wireless Headphones by Anker",
  },
  {
    id: 4,
    img: 4,
    title: "ComfoBuds Pro True Wireless Earbuds",
  },
  {
    id: 5,
    img: 5,
    title: "Ekster Parliament Smart Wallet",
  },
];

const brandPartners = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const smartWatches = [
  {
    id: 1,
    img: 1,
    item: "Ububa’s Echo Dot (4th Gen) Smart Speaker",
  },
  {
    id: 2,
    img: 2,
    item: "Chromecast with Google TV Streaming Player",
  },
  {
    id: 3,
    img: 3,
    item: "Ububa’s Echo Dot (4th Gen) Smart Speaker",
  },
  {
    id: 4,
    img: 4,
    item: "Ububa’s Echo Dot (4th Gen) Smart Speaker",
  },
];

const bannerBox = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const sampleProducts = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

const comboOne = [
  {
    id: 1,
    img: 1,
    item: "Chromecast with Google TV Streaming Player",
  },
  {
    id: 2,
    img: 2,
    item: "Grovemade Wood MagSafe Stand",
  },
  {
    id: 3,
    img: 3,
    item: "Nimble CHAMP Pro Portable Battery Pack",
  },
];

const comboTwo = [
  {
    id: 1,
    img: 4,
    item: "Sony SRS-RA3000 360 Reality Audio Wi-Fi Speaker",
  },
  {
    id: 2,
    img: 5,
    item: "Spigen Ultra Hybrid PRO Case for AirPods Max",
  },
  {
    id: 3,
    img: 6,
    item: "Coway Airmega 150 HEPA Air Purifier",
  },
];

const fastSellers = [
  {
    id: 1,
    img: 1,
    item: "Ububa’s Echo Dot (4th Gen) Smart Speaker",
  },
  {
    id: 2,
    img: 2,
    item: "Spigen Ultra Hybrid PRO Case for AirPods Max",
  },
  {
    id: 3,
    img: 3,
    item: "Chromecast with Google TV Streaming Player",
  },
  {
    id: 4,
    img: 4,
    item: "Jabra Elite Active 75t Wireless Earbuds",
  },
];
