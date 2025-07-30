import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Company_Name from "../Home/CompanyName";
import Footer from "../Home/Footer";
import HomeScreen from "../Home/HomeScreen";
import Navbar from "../Home/Navbar";
// import Home from '../Home/Home';
// import "./MenShoesCart.css"; // optional custom CSS


const shoesData = [
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
    title: "Reebok Classic",
    image: "https://th.bing.com/th/id/OIP.pskOkB3R3zi9NpgYJXuxpAHaHa",
    description: "Timeless leather sneaker.",
    price: "$75",
    rate: 4.0
  },
  {
    id: 5,
    title: "New Balance 574",
    image: "https://th.bing.com/th/id/OIP.1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    description: "Iconic running shoe with a classic look.",
    price: "$90",
    rate: 4.2
  },
  {
    id: 6,
    title: "Asics Gel-Kayano",
    image: "https://th.bing.com/th/id/OIP.qwertyuiopasdfghjklzxcvbnm123456",
    description: "High-performance running shoe with stability.",
    price: "$160",
    rate: 4.8
  },
  {
    id: 7,
    title: "Under Armour HOVR Phantom",
    image: "https://th.bing.com/th/id/OIP.zxcvbnmasdfghjklqwertyuiop123456",
    description: "Smart shoe with cushioning and energy return.",
    price: "$150",
    rate: 4.6
  },
  {
    id: 8,
    title: "Vans Old Skool",
    image: "https://th.bing.com/th/id/OIP.asdfghjklqwertyuiopzxcvbnm123456",
    description: "Classic skate shoe with a timeless design.",
    price: "$65",
    rate: 4.1
  },
  {
    id: 9,
    title: "Converse Chuck Taylor All Star",
    image: "https://th.bing.com/th/id/OIP.qwertyuiopasdfghjklzxcvbnm123456789",
    description: "Iconic canvas sneaker with a versatile style.",
    price: "$55",
    rate: 4.4
  },
  {
    id: 10,
    title: "Hoka One One Bondi",
    image: "https://th.bing.com/th/id/OIP.zxcvbnmasdfghjklqwertyuiop1234567890",
    description: "Maximum cushioning for long-distance comfort.",
    price: "$180",
    rate: 4.9
  }
];


function MenShoesCart() {
  return (
    <>

    <Navbar />
      <HomeScreen />
      <Company_Name />

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div className="card-body">
              <img src="https://www.hollywoodreporter.com/wp-content/uploads/2021/09/Madewell-Kickoff-Trainer-Sneakers-in-Neutral-Colorblock-Leather-EMBED-2022.jpeg" alt="" className="card-img-top" />
            </div>

          </div>
          <div class="col">
            <div className="card-body">
              <img src="https://i.pinimg.com/originals/dc/c6/c0/dcc6c0aeab3d91432033e670d35d838e.jpg" alt="" className="card-img-top" />
            </div>

          </div>
          <div class="col">
            <div className="card-body">
              <img src="https://images.dsw.com/is/image/DSWShoes/533599_003_ss_01?impolicy=qlt-medium-high&imwidth=640&imden" alt="" className="card-img-top" />
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="mb-4 text-center">Men's Shoes Collection</h2>
        <div className="row">
          {shoesData.map((shoe) => (
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

      <Footer />
    </>
  );
}

export default MenShoesCart;
