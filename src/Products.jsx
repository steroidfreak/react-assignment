import React from "react";

export default function Products() {
  return (
    <>
      {/* <!-- Featured Products --> */}
      <section className="py-5 bg-light" id="products">
        <div className="container">
          <h2 className="text-center mb-3 mt-3">Featured Products</h2>
          <div className="row g-4">
            {/* <!-- Product 1 --> */}
            <div className="col-md-3">
              <div className="product-card card h-100">
                <img
                  src="src\assets\images\classic_white_shirt.png"
                  className="card-img-top"
                  alt="Product"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Classic White Shirt</h5>
                  <p className="card-text text-muted">$49.99</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* <!-- Product 2 --> */}
            <div className="col-md-3">
              <div className="product-card card h-100">
                <img
                  src="src\assets\images\denim_jacket.png"
                  className="card-img-top"
                  alt="Product"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Denim Jacket</h5>
                  <p className="card-text text-muted">$89.99</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* <!-- Product 3 --> */}
            <div className="col-md-3">
              <div className="product-card card h-100">
                <img
                  src="src\assets\images\leather_boots.png"
                  className="card-img-top"
                  alt="Product"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Leather Boots</h5>
                  <p className="card-text text-muted">$129.99</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* <!-- Product 4 --> */}
            <div className="col-md-3">
              <div className="product-card card h-100">
                <img
                  src="src\assets\images\summer_dress_1.png"
                  className="card-img-top"
                  alt="Product"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Summer Dress</h5>
                  <p className="card-text text-muted">$69.99</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
