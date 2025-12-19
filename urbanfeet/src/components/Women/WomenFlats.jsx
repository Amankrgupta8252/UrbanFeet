import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WomenFlats() {
    const [flatsData, setFlatsData] = useState([
        {
            id: 1,
            title: "Comfortable Ballet Flats",
            image: "https://example.com/ballet-flats.jpg",
            description: "Perfect for everyday wear with a cushioned sole.",
            price: "$49.99",
            rate: 4.3
        },
        {
            id: 2,
            title: "Elegant Wedge Flats",
            image: "https://example.com/wedge-flats.jpg",
            description: "Stylish wedge flats for a chic look.",
            price: "$59.99",
            rate: 4.5
        },
        {
            id: 3,
            title: "Casual Slip-On Flats",
            image: "https://example.com/slip-on-flats.jpg",
            description: "Easy to wear slip-on flats for casual outings.",
            price: "$39.99",
            rate: 4.0
        },
        {
            id: 4,
            title: "Classic Loafer Flats",
            image: "https://example.com/loafer-flats.jpg",
            description: "Timeless loafer flats for a polished look.",
            price: "$69.99",
            rate: 4.4
        }
    ]);

    return(
        <>
        <Navbar />
        <HomeScreen />
        <Company_Name />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Featured Flats</h2>
                <div className="row">
                    {flatsData.map((flat) => (
                        <div key={flat.id} className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={flat.image} className="card-img-top" alt={flat.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{flat.title}</h5>
                                    <p className="card-text">{flat.description}</p>
                                    <p className="card-text"><strong>{flat.price}</strong></p>
                                    <p className="card-text">⭐ {flat.rate}</p>
                                    <button className="btn btn-primary w-100">Add to Cart</button>
                                </div>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </>
    )
}

export default WomenFlats;