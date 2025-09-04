import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';
import './FeedbackSection.css'; // We'll add custom styles here


function FeedbackSection() {
    const [Feedback, setFeedback] = useState([
    {
        name: 'John Doe',
        image: 'https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?r=0&rs=1&pid=ImgDetMain',
        feedback: 'UrbanShoes has transformed my shoe shopping experience! The variety and quality are unmatched.',
        rating: 5
    },
    {
        name: 'Jane Smith',
        image: 'https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg',
        feedback: 'I love the selection of sneakers at UrbanShoes. They always have the latest styles!',
        rating: 4
    },
    {
        name: 'Alice Johnson',
        image: 'https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000',
        feedback: 'Great customer service and fast shipping. Highly recommend UrbanShoes!',
        rating: 5
    },
    {
        name: 'Bob Brown',
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg',
        feedback: 'The best place to find stylish and comfortable shoes. I am a loyal customer now!',
        rating: 4
    },
    {
        name: 'Charlie White',
        image: 'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
        feedback: 'UrbanShoes has a fantastic collection of shoes for every occasion. I am always satisfied with my purchases.',
        rating: 5
    },
    {
        name: 'Emily Green',
        image: 'https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg',
        feedback: 'I appreciate the quality and durability of the shoes I bought from UrbanShoes. They are worth every penny!',
        rating: 5
    },
    {
        name: 'David Black',
        image: 'https://i1.rgstatic.net/ii/profile.image/11431281161394998-1685002535398_Q512/Maximilian-Vogt-2.jpg',
        feedback: 'UrbanShoes offers a great shopping experience. The website is easy to navigate and the delivery is prompt.',
        rating: 4
    },
    {
        name: 'Sophia Blue',
        image: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
        feedback: 'I am impressed with the range of brands available at UrbanShoes. I found exactly what I was looking for!',
        rating: 5
    }
]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Customer Feedback</h2>
            <div className="feedback-carousel">
                <div className="feedback-track">
                    {Feedback.map((feedback, index) => (
                        <div className="feedback-card" key={index}>
                            <img
                                src={feedback.image}
                                className="card-img-top"
                                alt={feedback.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{feedback.name}</h5>
                                <p className="card-text">{feedback.feedback}</p>
                                <div className="rating">
                                    {[...Array(feedback.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-warning" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedbackSection;
