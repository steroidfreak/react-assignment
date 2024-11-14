import React, { useState } from "react";
import ProductsPage from "./ProductsPage";

export default function Categories({ onCategorySelect }) {
  // Local state to track the selected category
  const [categorySelect, setCategorySelect] = useState("ALL");

  // Handler for category selection
  const handleCategorySelect = (category) => {
    // Update the local state if needed
    setCategorySelect(category);

    // Pass the selected category to the parent function
    // onCategorySelect(category);

    // Log the selected category
    console.log(`Category Selected: ${category}`);
  };

  return (

    < section className="py-5" id="categories" >
      <div className="container">
        <h2 className="text-center mb-3 mt-3">Shop by Category</h2>
        <div className="row g-4">
          <div
            className="col-md-4"
            onClick={() => handleCategorySelect("Men's Fashion")}
          >
            <div className="category-card card">
              <img
                src="src/assets/images/men_fashion.png"
                className="card-img-top"
                alt="Men's Fashion"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Men's Fashion</h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            onClick={() => handleCategorySelect("Women's Fashion")}
          >
            <div className="category-card card">
              <img
                src="src/assets/images/women_fashion.png"
                className="card-img-top"
                alt="Women's Fashion"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Women's Fashion</h5>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            onClick={() => handleCategorySelect("Accessories")}
          >
            <div className="category-card card">
              <img
                src="src/assets/images/accessories.png"
                className="card-img-top"
                alt="Accessories"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
