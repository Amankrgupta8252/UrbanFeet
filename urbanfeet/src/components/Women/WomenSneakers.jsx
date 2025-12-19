import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Home/Navbar";
import HomeScreen from "../Home/HomeScreen";
import Company_Name from "../Home/CompanyName";

function WomenSneakers() {
    const [SneakersData, setSneakersdata] = useState([
        {
            id: 1,
            title: "Nike Air Max",
            image: "https://i5.walmartimages.com/asr/21713497-895d-4085-bd9e-01a2df6b3700_1.0c2e85c7953c44eee100fb3bc8782914.jpeg",
            description: "Classic sneaker with comfort and style.",
            price: "$120",
            rate: 4.5
        },
        {
            id: 2,
            title: "Adidas Ultraboost",
            image: "https://images-static.nykaa.com/media/catalog/product/b/d/bd88401BDADIDA00059365_1.jpg?tr=w-344,h-344,cm-pad_resize",
            description: "Exceptional energy return and snug fit.",
            price: "$180",
            rate: 4.7
        },
        {
            id: 3,
            title: "Puma RS-X",
            image: "https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize",
            description: "Retro-inspired bold sneaker.",
            price: "$110",
            rate: 4.3
        },
        {
            id: 4,
            title: "New Balance Fresh Foam",
            image: "https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize",
            description: "Lightweight and comfortable for all-day wear.",
            price: "$130",
            rate: 4.2
        }
    ]);


    return (
        <>
            <Navbar />
            <HomeScreen />
            <Company_Name />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Featured Sneakers</h2>
                <div className="row">
                    {SneakersData.map((sneaker) => (
                        <div key={sneaker.id} className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={sneaker.image} className="card-img-top" alt={sneaker.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{sneaker.title}</h5>
                                    <p className="card-text">{sneaker.description}</p>
                                    <p className="card-text"><strong>{sneaker.price}</strong></p>
                                    <p className="card-text">⭐ {sneaker.rate}</p>
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
    export default WomenSneakers;