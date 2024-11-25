import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mt-4">
            {/* Add a centered heading */}
            <div className="text-center  py-4">
                <h1 className="display-4">Products</h1>
            </div>

            {/* Product grid */}
            <div className="row">
                {products.length > 0 ? (
                    products.map((p) => (
                        <div key={p.id} className="col-12 col-md-4 col-lg-3 mb-4">
                            <ProductCard
                                productName={p.name}
                                price={p.price}
                                imageUrl={p.image}
                                id={p.id}
                                description={p.description}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No products available at the moment.</p>
                    </div>
                )}
            </div>

            {/* Toast notifications */}
            <ToastContainer />
        </div>
    );
}

export default ProductsPage;
