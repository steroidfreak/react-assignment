import React from "react";

export default function Categories() {
  return (
    <>
      {/* <!-- Categories --> */}
      <section className="py-5" id="categories">
        <div className="container">
          <h2 className="text-center mb-3 mt-3">Shop by Category</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="category-card card">
                <img
                  src="src\assets\images\men_fashion.png"
                  className="card-img-top"
                  alt="Men's Fashion"
                ></img>
                <div className="card-body text-center">
                  <h5 className="card-title">Men's Fashion</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card card">
                <img
                  src="src\assets\images\women_fashion.png"
                  className="card-img-top"
                  alt="Women's Fashion"
                ></img>
                <div className="card-body text-center">
                  <h5 className="card-title">Women's Fashion</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card card">
                <img
                  src="src\assets\images\accessories.png"
                  className="card-img-top"
                  alt="Accessories"
                ></img>
                <div className="card-body text-center">
                  <h5 className="card-title">Accessories</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
