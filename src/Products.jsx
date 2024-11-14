import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

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
              <ProductCard
                imageUrl="src\assets\images\classic_white_shirt.png"
                productName="Classic White Shirt"
                price="19.99" />

            </div>
            {/* <!-- Product 2 --> */}
            <div className="col-md-3">
              <ProductCard
                imageUrl="src\assets\images\denim_jacket.png"
                productName="Denim Jacket"
                price="89.99" />

            </div>
            {/* <!-- Product 3 --> */}
            <div className="col-md-3">
              <ProductCard
                imageUrl="src\assets\images\leather_boots.png"
                productName="Leather Boots"
                price="129.99" />

            </div>
            {/* <!-- Product 4 --> */}
            <div className="col-md-3">
              <ProductCard
                imageUrl="src\assets\images\summer_dress_1.png"
                productName="Summer Dress"
                price="69.99" />

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
