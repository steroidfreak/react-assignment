import React from "react";
import { useLocation } from "wouter";

export default function HomePage() {
  const [_, navigate] = useLocation();

  const handleShopNow = () => {
    console.log("redirect to /products");
    navigate("/products");
  };

  return (
    <>
      {/* <!-- Home Page Section --> */}
      <section className="hero-section" id="home">
        <div className="container text-white">
          <div className="row align-items-center">
            {/* Left Column: Text and Button */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4 text-title">
                Discover Trendy Fashion
              </h1>
              <p className="lead mb-4">
                Experience the latest trends in fashion with our curated
                collection of premium products.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
            </div>
            {/* Right Column: YouTube Video */}
            <div className="col-lg-6">
              <div className="video-box">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
