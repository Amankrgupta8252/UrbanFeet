import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LatestNewsData = [ // Renamed to avoid conflict with the function name
    { title: 'Fall Footwear Trends', image: 'https://wallpapercave.com/wp/wp2461049.jpg', description: 'Get ready for the fall season with our guide to the latest footwear trends. From boots to loafers, find your perfect pair.', date: '2023-09-10' },
    { title: 'UrbanShoes Customer Appreciation Day', image: 'https://th.bing.com/th/id/OIP.Om6SnOGlihB3kpWaMXKf4QHaEc?r=0&rs=1&pid=ImgDetMain', description: 'Join us for our Customer Appreciation Day with special discounts, giveaways, and more. Thank you for being a part of the UrbanShoes family!', date: '2023-09-05' },
    { title: 'Sneaker Customization Workshop', image: 'https://th.bing.com/th/id/OIP.H7euLSy8SxmRKSOCI9sgnAHaEo?r=0&rs=1&pid=ImgDetMain', description: 'Unleash your creativity at our Sneaker Customization Workshop. Learn how to personalize your sneakers with unique designs.', date: '2023-09-01' },
    { title: 'Fall Footwear Trends', image: 'https://wallpapercave.com/wp/wp2461049.jpg', description: 'Get ready for the fall season with our guide to the latest footwear trends. From boots to loafers, find your perfect pair.', date: '2023-09-10' },
    { title: 'UrbanShoes Customer Appreciation Day', image: 'https://th.bing.com/th/id/OIP.Om6SnOGlihB3kpWaMXKf4QHaEc?r=0&rs=1&pid=ImgDetMain', description: 'Join us for our Customer Appreciation Day with special discounts, giveaways, and more. Thank you for being a part of the UrbanShoes family!', date: '2023-09-05' },
    { title: 'Sneaker Customization Workshop', image: 'https://th.bing.com/th/id/OIP.H7euLSy8SxmRKSOCI9sgnAHaEo?r=0&rs=1&pid=ImgDetMain', description: 'Unleash your creativity at our Sneaker Customization Workshop. Learn how to personalize your sneakers with unique designs.', date: '2023-09-01' },
    { title: 'UrbanShoes Sustainability Initiatives', image: 'https://th.bing.com/th/id/OIP.qbUNdTbQtMtW5IiSAuVOAgHaHa?r=0&rs=1&pid=ImgDetMain', description: 'We are committed to sustainability. Learn about our initiatives to reduce our environmental impact and promote eco-friendly practices.', date: '2023-08-25' },
    { title: 'Back to School Footwear Guide', image: 'https://addicfashion.com/wp-content/uploads/2019/06/cool-shoes-summer-ideas-for-men-that-looks-cool18.jpg', description: 'Get ready for the school year with our Back to School Footwear Guide. Find stylish and comfortable shoes for students of all ages.', date: '2023-08-20' },
    { title: 'UrbanShoes Anniversary Sale', image: 'https://geraldblack.com/cdn/shop/products/luxury-fashion-casual-breathable-flat-canvas-basic-shoes-for-men-geraldblack-com-11202758738000.jpg?v=1670460717', description: 'Celebrate our anniversary with us! Enjoy exclusive discounts and special offers on your favorite footwear.', date: '2023-08-15' },
    { title: 'Fall Footwear Trends', image: 'https://wallpapercave.com/wp/wp2461049.jpg', description: 'Get ready for the fall season with our guide to the latest footwear trends. From boots to loafers, find your perfect pair.', date: '2023-09-10' },
    { title: 'UrbanShoes Customer Appreciation Day', image: 'https://th.bing.com/th/id/OIP.Om6SnOGlihB3kpWaMXKf4QHaEc?r=0&rs=1&pid=ImgDetMain', description: 'Join us for our Customer Appreciation Day with special discounts, giveaways, and more. Thank you for being a part of the UrbanShoes family!', date: '2023-09-05' },
    { title: 'Sneaker Customization Workshop', image: 'https://th.bing.com/th/id/OIP.H7euLSy8SxmRKSOCI9sgnAHaEo?r=0&rs=1&pid=ImgDetMain', description: 'Unleash your creativity at our Sneaker Customization Workshop. Learn how to personalize your sneakers with unique designs.', date: '2023-09-01' },
];

function LatestNews() {
    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Latest News</h2>
                <div className="row">
                    {LatestNewsData.map((news, index) => ( // Use LatestNewsData here
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card">
                                <img src={news.image} className="card-img-top" alt={news.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.description}</p>
                                    <p className="text-muted">{new Date(news.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LatestNews;
