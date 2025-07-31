import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Rename the array variable to avoid name conflict with the component
const featuredProducts = [
  {
    id: 1,
    title: "Stylish Sneakers",
    description: "Comfortable and trendy sneakers for everyday wear.",
    price: "$59.99",
    image: "https://cdn.sweatband.com/new_balance_w560v3_womens_running_shoes_new_balance_w560v3_womens_running_shoes_pair_2000x2000.jpg"
  },
  {
    id: 2,
    title: "Elegant Heels",
    description: "Perfect heels for any occasion, combining style and comfort.",
    price: "$89.99",
    image: "https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize"
  },
  {
    id: 3,
    title: "Casual Sandals",
    description: "Lightweight sandals ideal for summer outings.",
    price: "$39.99",
    image: "https://images-static.nykaa.com/media/catalog/product/b/d/bd88401BDADIDA00059365_1.jpg?tr=w-344,h-344,cm-pad_resize"
  },
  {
    id: 4,
    title: "Running Shoes",
    description: "High-performance running shoes designed for athletes.",
    price: "$99.99",
    image: "https://i5.walmartimages.com/asr/21713497-895d-4085-bd9e-01a2df6b3700_1.0c2e85c7953c44eee100fb3bc8782914.jpeg"
  },
  {
    id: 5,
    title: "Classic Loafers",
    description: "Timeless loafers that add elegance to your wardrobe.",
    price: "$79.99",
    image: "https://i8.amplience.net/i/jpl/sz_686989_a?qlt=92&w=750&h=580&v=1&fmt=auto"
  },
  {
    id: 6,
    title: "Sporty Trainers",
    description: "Versatile trainers for both gym and casual wear.",
    price: "$69.99",
    image: "https://images-static.nykaa.com/media/catalog/product/9/7/97030b8DPUMAX00168468_1.jpg?tr=w-344,h-344,cm-pad_resize"
  },
  {
    id: 7,
    title: "Winter Boots",
    description: "Warm and durable boots for cold weather.",
    price: "$129.99",
    image: "https://images-static.nykaa.com/media/catalog/product/b/d/bd88401BDADIDA00059365_1.jpg?tr=w-344,h-344,cm-pad_resize"
  },
  {
    id: 8,
    title: "Fashionable Flats",
    description: "Chic flats that are perfect for everyday wear.",
    price: "$49.99",
    image: "https://i5.walmartimages.com/asr/21713497-895d-4085-bd9e-01a2df6b3700_1.0c2e85c7953c44eee100fb3bc8782914.jpeg"
  },
  {
    id: 9,
    title: "Luxury Boots",
    description: "Premium boots that combine style and comfort.",
    price: "$199.99",
    image: "https://cdn.sweatband.com/new_balance_w560v3_womens_running_shoes_new_balance_w560v3_womens_running_shoes_pair_2000x2000.jpg"
  }
];

function FeatureProduct() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}</strong></p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureProduct;
