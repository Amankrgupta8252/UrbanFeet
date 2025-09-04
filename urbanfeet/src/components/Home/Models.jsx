import React, { useState } from "react";

function Models() {
  const [shoeCards, setshoeCards] = useState([
    {
      title: "Shoe One",
      img: "https://thumbs.dreamstime.com/z/business-man-shoes-professional-getting-ready-work-putting-smart-tying-shoelaces-home-51343560.jpg",
      desc: "Comfortable and stylish for daily wear."
    },
    {
      title: "Shoe Two",
      img: "https://thumbs.dreamstime.com/z/girl-shoes-beautiful-35850276.jpg",
      desc: "Perfect for sports and outdoor activities."
    },
    {
      title: "Sneaker Pro",
      img: "https://th.bing.com/th/id/OIP.BMusBBvno4N3ZfpFSxVfqAAAAA?r=0&w=396&h=640&rs=1&pid=ImgDetMain",
      desc: "High-performance and trendy for every occasion."
    }
  ]);
  return (
    <>
      {/* Product Cards */}
      <div className="container mt-4">
        <div className="row">
          {shoeCards.map((shoe, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <img src={shoe.img} className="card-img-top" alt={shoe.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{shoe.title}</h5>
                  <p className="card-text">{shoe.desc}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary ms-2">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Models;