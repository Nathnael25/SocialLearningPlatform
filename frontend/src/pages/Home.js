import React from "react";

function Home() {
  return (
    <div className="main-layout home_page">
      {/* Loader */}
      <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="Loading" />
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="books.html">Our Books</a>
                        </li>
                        <li>
                          <a href="library.html">Library</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                        <li className="mean-last">
                          <a href="#">
                            <img src="images/search_icon.png" alt="Search" />
                          </a>
                        </li>
                        <li className="mean-last">
                          <a href="#">
                            <img src="images/top-icon.png" alt="Top" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider_section">
        <div
          id="myCarousel"
          className="carousel slide banner-main"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {["First", "Second", "Third"].map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  className={`${index + 1}-slide`}
                  src="images/banner.jpg"
                  alt={`${slide} slide`}
                />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>
                      The Best Libraries That
                      <br /> Every Book Lover Must
                      <br /> Visit!
                    </h1>
                    <p>
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      <br /> labore et dolore magna aliqua. Ut enim ad minim
                      <br /> veniam, quis nostrud exercitation
                    </p>
                    <div className="button_section">
                      <a className="main_bt" href="#">
                        Read More
                      </a>
                    </div>
                    <ul className="locat_icon">
                      {["facebook", "Twitter", "linkedin", "instagram"].map(
                        (icon, i) => (
                          <li key={i}>
                            <a href="#">
                              <img src={`icon/${icon}.png`} alt={icon} />
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="aboutheading">
                <h2>
                  About <strong className="black">Us</strong>
                </h2>
                <span>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris
                </span>
              </div>
            </div>
          </div>
          <div className="row border">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="about-box">
                <p>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="about-box">
                <figure>
                  <img src="images/about.png" alt="About Us" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <div className="Library">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="titlepage">
                <h2>
                  Our <strong className="black">Library</strong>
                </h2>
                <span>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row pdn-top-30">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Follow">
                  <h3>Follow Us</h3>
                </div>
                <ul className="location_icon">
                  {["facebook", "Twitter", "linkedin", "instagram"].map(
                    (icon, i) => (
                      <li key={i}>
                        <a href="#">
                          <img src={`icon/${icon}.png`} alt={icon} />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                <div className="Follow">
                  <h3>Newsletter</h3>
                </div>
                <input
                  className="Newsletter"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="Subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
