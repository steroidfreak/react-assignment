import React from 'react';
import { useCart } from './CartStore';
import { toast } from 'react-toastify'; // Import toast


export default function ProductCard(props) {
    const { addToCart } = useCart();

    function handleAddToCart() {
        // Add the product to the cart
        addToCart(props);

        // Show a toast notification when product is added to cart
        toast.success(`${props.productName} added to cart`, {
            position: "bottom-right", // Customize position
            autoClose: 3000,           // Auto close after 3 seconds
            hideProgressBar: false,   // Show progress bar
            closeOnClick: true,       // Close on click
            pauseOnHover: true,       // Pause when hovering
            draggable: true,          // Draggable
            progress: undefined,      // Show progress
        });
    }
    return (
        <div className="card">
            <img
                src={props.imageUrl}
                className="card-img-top"
                alt={props.productName}
            />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.description}</p>

                <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}