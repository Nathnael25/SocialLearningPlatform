import React from "react";

function Home() {
  return (
    <div className="main-layout home_page">
      {/* Loader */}
      <div className="loader_bg">
        <div className="loader text-center">
          <img src="images/loading.gif" alt="Loading" />
        </div>
      </div>

      {/* Slider Section */}
      <section className="slider_section mb-5">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[
              {
                src: "images/banner.jpg",
                title: "Welcome to Our Library",
                description:
                  "Explore a vast collection of books and resources.",
              },
              {
                src: "images/about-bg.jpg",
                title: "About Us",
                description: "Learn more about our mission and vision.",
              },
              {
                src: "images/Library.jpg",
                title: "Our Library",
                description:
                  "Discover the best books for your reading pleasure.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                }}
              >
                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                  <h1 className="text-white fw-bold">{item.title}</h1>
                  <p className="text-white">{item.description}</p>
                  <a href="#about" className="btn btn-primary btn-lg mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <div className="about section py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h2>
                About <strong className="text-primary">Us</strong>
              </h2>
              <p className="text-muted">
                Discover who we are and what we do to bring knowledge closer to
                you.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="images/about.png"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Library Section */}
      <div className="Library section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h2>
                Our <strong className="text-primary">Library</strong>
              </h2>
              <p className="text-muted">
                Explore our vast collection of books and resources.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-md-start">
              <h3>Follow Us</h3>
              <ul className="list-inline">
                {["facebook", "Twitter", "linkedin", "instagram"].map(
                  (icon, i) => (
                    <li className="list-inline-item" key={i}>
                      <a href="#" className="text-light">
                        <img
                          src={`icon/${icon}.png`}
                          alt={icon}
                          className="me-2"
                          style={{ width: "20px", height: "20px" }}
                        />
                        {icon}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-md-8 text-center text-md-end">
              <h3>Newsletter</h3>
              <div className="d-flex justify-content-center justify-content-md-end mt-3">
                <input
                  className="form-control me-2"
                  placeholder="Enter your email"
                  type="email"
                  style={{ maxWidth: "300px" }}
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
