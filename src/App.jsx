import React, { useState } from "react";
import { Route, Switch } from "wouter";
import "./styles.css"
import NavBar from "./NavBar";
import HomePage from "./homepage";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Subscribe from "./Subscribe";
import RegisterPage from "./RegisterPage";
import BootstrapNavbar from "./BootstrapNavbar";
import MaterialUINavbar from "./MaterialUINavbar";


function App() {


    return (
        <>
            <NavBar />
            {/* <BootstrapNavbar /> */}
            {/* <MaterialUINavbar /> */}
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/categories" component={Categories} />
                <Route path="/products" component={Products} />
                <Route path="/newsletter" component={Newsletter} />
                <Route path="/register" component={RegisterPage} />

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