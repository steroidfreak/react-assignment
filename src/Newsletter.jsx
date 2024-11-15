import React from 'react';
import { FaLeaf, FaTshirt, FaShoppingBag, FaSeedling, FaStar } from 'react-icons/fa';

export default function Newsletter() {
    const articles = [
        {
            title: "Fall Fashion Essentials to Elevate Your Wardrobe",
            description: "As the weather cools down, it's time to update your wardrobe with essential pieces that not only keep you warm but also elevate your style. This season, cozy sweaters, stylish outerwear, and versatile layering pieces are a must-have in every closet. Opt for bold colors and chunky knits for an effortlessly chic look that will carry you from day to night. Whether you're staying casual or dressing up for special occasions, these essentials will help you create a wardrobe that works for any fall outing.",
            icon: <FaTshirt />,
            color: "#FFDDC1",
        },
        {
            title: "New Arrivals: Fresh Styles to Refresh Your Closet",
            description: "Our latest collection is in, and it's packed with vibrant hues, chic patterns, and must-have designs that are sure to update your wardrobe. From flowy dresses to sleek trousers, these new arrivals are designed to bring freshness and versatility to your closet. Whether you're looking for something casual for weekend outings or a polished look for the office, we’ve got something for every occasion. Get ready to turn heads with pieces that highlight your unique style.",
            icon: <FaShoppingBag />,
            color: "#FFABAB",
        },
        {
            title: "The Ultimate Guide to Sustainable Fashion",
            description: "At Modern Shop, we're committed to making fashion more sustainable without compromising on style. This guide explores the growing trend of eco-friendly fashion, from choosing organic fabrics to supporting ethical brands that care about the environment. Learn how to create a wardrobe that's not only stylish but also kinder to the planet. Find out about the latest sustainable materials, the importance of reducing waste, and how you can contribute to a more eco-conscious fashion industry while still looking fabulous.",
            icon: <FaLeaf />,
            color: "#FFC3A0",
        },
        {
            title: "Must-Have Accessories to Complete Any Outfit",
            description: "A great outfit is all about the details, and accessories are the perfect way to elevate your look. From eye-catching jewelry to stylish handbags, accessories can transform any basic outfit into something special. This season, think bold statement necklaces, oversized scarves, and modern clutches. Discover how the right accessories can not only complete your look but also add personality and flair, making your outfit truly yours. Check out our collection of must-have accessories to add to your wardrobe today!",
            icon: <FaStar />,
            color: "#FF677D",
        },
        {
            title: "Why Choose Modern Shop for Your Fashion Needs?",
            description: "At Modern Shop, we believe that shopping should be a seamless and enjoyable experience. From user-friendly browsing to fast shipping, we’re dedicated to providing a top-notch service for every customer. Our collection features high-quality pieces that are carefully selected to ensure you always find something you'll love. Whether you're shopping for the latest trends or timeless classics, our team is here to help you curate a wardrobe that's all about your unique style. Discover why so many fashion-forward customers trust Modern Shop for their clothing and accessories.",
            icon: <FaSeedling />,
            color: "#D4A5A5",
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="py-4 text-center text-primary">Modern Shop Newsletter</h1>
            <div className="row">
                {articles.map((article, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div
                            className="p-4 rounded shadow"
                            style={{
                                backgroundColor: article.color,
                                color: "#333",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div className="d-flex align-items-center mb-3">
                                <div
                                    style={{
                                        fontSize: "2rem",
                                        marginRight: "1rem",
                                        color: "#333",
                                    }}
                                >
                                    {article.icon}
                                </div>
                                <h3 className="m-0" style={{ fontSize: "1.25rem" }}>
                                    {article.title}
                                </h3>
                            </div>
                            <p style={{ fontSize: "1rem" }}>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
