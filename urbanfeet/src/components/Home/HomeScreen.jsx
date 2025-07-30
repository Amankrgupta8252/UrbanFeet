import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Company_Name from './CompanyName';
// import FeatureProduct from './FeatureProduct';
// import FeedbackSection from './Feedback';
// import LatestNewsSection from './LatestNews';
// import Footer from './Footer';
// import Home from './Home';

const carouselData = [
  {
    url: "https://golfshub.com/wp-content/uploads/2019/09/nike-mens-roshe-golf-shoes.jpg",
    label: "Street Ready",
    description: "Comfort meets performance in every step."
  },
  {
    url: "https://images5.alphacoders.com/632/632664.jpg",
    label: "Casual Comfort",
    description: "Your daily wear just got a lot better."
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/02/22/12/01/shoe-1215384_960_720.jpg",
    label: "Elegant Edge",
    description: "A perfect blend of style and support."
  }
];


function HomeScreen() {
  return (
    <>
      {/* <Home /> */}
      {/* Carousel */}
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className="mt-4">Welcome to Urban Feet</h1>
            <p className="lead">Explore the latest in footwear fashion and technology.</p>
            <p className="mb-4">Discover our exclusive collection of shoes designed for comfort, style, and performance.</p>
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary ms-2">Learn More</button>
            <p className="mt-3">Follow us on social media for the latest updates!</p>
          </div>
          <div class="col">

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {carouselData.map((_, index) => (
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

              <div className="carousel-inner">
                {carouselData.map((item, index) => (
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




      {/* <Company_Name />
      <FeatureProduct />
      <LatestNewsSection />
      <FeedbackSection />
      <Footer /> */}
    </>
  );
}

export default HomeScreen;
