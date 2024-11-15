import React, { useState, useEffect } from "react";
import { Route, Switch } from "wouter";
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from "./NavBar";
import HomePage from "./homepage";
import Newsletter from "./Newsletter";
import RegisterPage from "./RegisterPage";
import ProductsPage from "./ProductsPage";
import { useFlashMessage } from './FlashMessageStore';
import ShoppingCart from "./ShoppingCart";

function App() {

    const { getMessage, clearMessage } = useFlashMessage();
    const flashMessage = getMessage();

    useEffect(() => {

        const timer = setTimeout(() => {
            clearMessage();
        }
            , 4000);
        return () => {
            clearTimeout(timer);
        };
    }
        , [flashMessage]);
    return (
        <>
            <NavBar />
            {flashMessage.message && (
                <div className={`container alert alert-${flashMessage.type} text-center flash-alert`}>
                    {flashMessage.message}
                </div>
            )}
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/newsletter" component={Newsletter} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/cart" component={ShoppingCart} />

            </Switch>


            {/* <!-- Footer --> */}
            <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>ModernShop</h5>
                            <p>Your one-stop destination for trendy fashion.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light">About Us</a></li>
                                <li><a href="#" className="text-light">Contact</a></li>
                                <li><a href="#" className="text-light">FAQ</a></li>
                                <li><a href="#" className="text-light">Shipping</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div className="social-icons">
                                <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-light"><i className="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;