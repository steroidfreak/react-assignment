import React from "react";

export default function HomePage() {
  return (
    <>
      {/* <!-- Home Page Section --> */}
      <section className="hero-section" id="home">
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Discover Trendy Fashion
              </h1>
              <p className="lead mb-4">
                Experience the latest trends in fashion with our curated
                collection of premium products.
              </p>
              <button className="btn btn-primary btn-lg">Shop Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
