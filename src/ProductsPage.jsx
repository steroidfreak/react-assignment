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
                const response = await axios.get('/products.json');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-3 mt-3">Our Products</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <ProductCard
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            description={product.description}
                            id={product.id}
                            price={product.price.toFixed(2)}
                        />
                    </div>
                ))}
            </div>

            <ToastContainer />  {/* Add ToastContainer to show notifications */}
        </div>
    );
}

export default ProductsPage;
