import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Home/Navbar";
import HomeScreen from "../Home/HomeScreen";
import Company_Name from "../Home/CompanyName";


function SportShoes() {
    const [sportShoesData, setSportShoesData] = useState([
        {
            id: 1,
            title: "Nike Running Shoes",
            image: "https://example.com/nike-running-shoes.jpg",
            description: "Lightweight and breathable running shoes.",
            price: "$130",
            rate: 4.6
        },
        {   
            id: 2,
            title: "Adidas Training Shoes",
            image: "https://example.com/adidas-training-shoes.jpg",
            description: "Durable and supportive training shoes.",
            price: "$140",
            rate: 4.5
        },
        {   
            id: 3,
            title: "Puma Cross Trainer",
            image: "https://example.com/puma-cross-trainer.jpg",
            description: "Versatile cross-training shoes.",
            price: "$120",
            rate: 4.4
        },
        {   
            id: 4,
            title: "New Balance Fresh Foam",
            image: "https://example.com/new-balance-fresh-foam.jpg",
            description: "Comfortable and lightweight for daily wear.",
            price: "$150",
            rate: 4.7
        }
    ]);

    return(
        <>
        <Navbar />
        <HomeScreen />
        <Company_Name />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Featured Sport Shoes</h2>  
                <div className="row">
                    {sportShoesData.map((shoe) => (
                        <div key={shoe.id} className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={shoe.image} className="card-img-top" alt={shoe.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{shoe.title}</h5>
                                    <p className="card-text">{shoe.description}</p>
                                    <p className="card-text"><strong>{shoe.price}</strong></p>
                                    <p className="card-text">⭐ {shoe.rate}</p>
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
export default SportShoes;