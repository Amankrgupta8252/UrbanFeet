import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeScreen() {
  const [ carouselDate, setCarouselData ] = useState([
    {
      url: "https://golfshub.com/wp-content/uploads/2019/09/nike-mens-roshe-golf-shoes.jpg",
      label: "Street Ready",
      description: "Comfort meets performance in every step."
    },
    {
      url: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_nike-sabrina-2-white-noise.png",
      label: "Elegant Edge",
      description: "A perfect blend of style and support."
    },
    {
      url: "https://justfreshkicks.com/wp-content/uploads/2024/03/nike-ja-1-ny-vs-ny-official-look-FV1286-400.jpg",
      label: "Casual Comfort",
      description: "Your daily wear just got a lot better."
    },
    {
      url: "https://tse3.mm.bing.net/th/id/OIP.jOqngvv5edYDYLMl62bZggHaEF?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      label: "Elegant Edge",
      description: "A perfect blend of style and support."
    }
  ]);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 className="mt-4">Welcome to Urban Feet</h1>
            <p className="lead">Explore the latest in footwear fashion and technology.</p>
            <p className="mb-4">Discover our exclusive collection of shoes designed for comfort, style, and performance.</p>
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary ms-2">Learn More</button>
            <p className="mt-3">Follow us on social media for the latest updates!</p>
          </div>

          <div className="col">
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
        </div>
      </div>
    </> 
  );
}
export default HomeScreen;