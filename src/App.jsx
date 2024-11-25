import React, { useState, useEffect } from "react";
import { Route, Switch } from "wouter";
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Newsletter from "./Newsletter";
import RegisterPage from "./RegisterPage";
import ProductsPage from "./ProductsPage";
import { useFlashMessage } from './FlashMessageStore';
import ShoppingCart from "./ShoppingCart";
import UserLogin from "./UserLogin";
import Footer from "./Footer";

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
                <Route path="/login" component={UserLogin} />
                <Route path="/cart" component={ShoppingCart} />

            </Switch>

            <Footer />
           
        </>
    )
}

export default App;