import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Sandal() {
  const [carouselDate, setCarouselData] = useState([
    {
      url: "https://i5.walmartimages.com/seo/Men-s-Hiking-Sandals-Outdoor-Open-Toe-Beach-Sandals-For-Men_ef14e6e5-ced0-4c01-899e-6ffd58ef63b6.ad174c140be3fc12d371cbe7e1355118.jpeg",
      label: "Street Ready",
      description: "Comfort meets performance in every step."
    },
    {
      url: "https://i5.walmartimages.com/seo/Men-s-Hiking-Sandals-Outdoor-Open-Toe-Beach-Sandals-For-Men_ef14e6e5-ced0-4c01-899e-6ffd58ef63b6.ad174c140be3fc12d371cbe7e1355118.jpeg",
      label: "Elegant Edge",
      description: "A perfect blend of style and support."
    },
    {
      url: "https://m.media-amazon.com/images/I/81iHo3r7kqL.jpg",
      label: "Casual Comfort",
      description: "Your daily wear just got a lot better."
    },
    {
      url: "https://assets.manufactum.de/p/204/204551/204551_01.jpg/mens-leather-sandal.jpg",
      label: "Elegant Edge",
      description: "A perfect blend of style and support."
    }
  ]);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {/* Carousel Column */}
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              {/* Indicators */}
              <div className="carousel-indicators">
                {carouselDate.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel items */}
              <div className="carousel-inner">
                {carouselDate.map((item, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img
                      src={item.url}
                      className="d-block w-100"
                      alt={item.label}
                      style={{ maxHeight: '550px', objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                      <h5>{item.label}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h1 className="mt-4">Welcome to Urban Feet</h1>
            <p className="lead">Explore the latest in footwear fashion and technology.</p>
            <p className="mb-4">Discover our exclusive collection of shoes designed for comfort, style, and performance.</p>
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary ms-2">Learn More</button>
            <p className="mt-3">Follow us on social media for the latest updates!</p>
          </div>
        </div>
      </div>

    </>
  );
}
export default Sandal;