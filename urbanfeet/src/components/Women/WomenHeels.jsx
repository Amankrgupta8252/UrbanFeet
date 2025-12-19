import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Home/Navbar";
import HomeScreen from "../Home/HomeScreen";
import Company_Name from "../Home/CompanyName";

function WomenHeels() {
    const [heelsData, setHeelsData] = useState([
        {
            id: 1,
            title: "Elegant Stiletto Heels",
            image: "https://example.com/stiletto-heels.jpg",
            description: "Perfect for formal occasions with a sleek design.",
            price: "$89.99",
            rate: 4.5
        },
        {
            id: 2,

            title: "Elegant Stiletto Heels",
            image: "https://example.com/stiletto-heels.jpg",
            description: "Perfect for formal occasions with a sleek design.",
            price: "$89.99",
            rate: 4.5
        },
        {
            id: 3,
            title: "Elegant Stiletto Heels",
            image: "https://example.com/stiletto-heels.jpg",
            description: "Perfect for formal occasions with a sleek design.",
            price: "$89.99",
            rate: 4.5
        },
        {
            id: 4,
            title: "Elegant Stiletto Heels",
            image: "https://example.com/stiletto-heels.jpg",
            description: "Perfect for formal occasions with a sleek design.",
            price: "$89.99",
            rate: 4.5
        }
    ]);

    return(
        <>
        <Navbar />
        <HomeScreen />
        <Company_Name />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Featured Heels</h2>
                <div className="row">
                    {heelsData.map((heel) => (
                        <div key={heel.id} className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={heel.image} className="card-img-top" alt={heel.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{heel.title}</h5>
                                    <p className="card-text">{heel.description}</p>
                                    <p className="card-text"><strong>{heel.price}</strong></p>
                                    <p className="card-text">⭐ {heel.rate}</p>
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

export default WomenHeels;