import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function NavBar() {
    const [isNavbarShowing, setNavbarShowing] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleNavbar = () => {
        setNavbarShowing(!isNavbarShowing);
    };
    const [location] = useLocation();

    // Sync the collapse state with screen size
    useEffect(() => {
        const syncNavbarState = () => {
            setNavbarShowing(window.innerWidth >= 992); // Show if larger than 992px, otherwise don't show
        };

        syncNavbarState(); // Run on mount to set the initial state

        // Listen for window resize events
        window.addEventListener('resize', syncNavbarState);

        // Cleanup the listener on unmount
        return () => window.removeEventListener('resize', syncNavbarState);
    }, []); // This useEffect only runs once, on mount

    // Sync isLoggedIn state with localStorage directly
    useEffect(() => {
        // Function to sync login state from localStorage
        const syncLoginState = () => {
            const loginStatus = localStorage.getItem('loggedIn');
            setIsLoggedIn(loginStatus === 'true');
        };

        // Initial sync
        syncLoginState();

        // Listen for our custom event
        window.addEventListener('loginStateChange', syncLoginState);

        // Cleanup
        return () => window.removeEventListener('loginStateChange', syncLoginState);
    }, []); // Empty dependency array means this runs once on mount

    const handleLogout = () => {
        // Remove login status and JWT token from localStorage
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('jwtToken');
        
        // Dispatch custom event
        window.dispatchEvent(new Event('loginStateChange'));
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        ModernShop
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className={`nav-link ${location === "/" ? "active" : ""}`}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    href="/products"
                                    className={`nav-link ${location === "/products" ? "active" : ""}`}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/newsletter"
                                    className={`nav-link ${location === "/newsletter" ? "active" : ""}`}
                                >
                                    Newsletter
                                </Link>
                            </li>
                        </ul>

                        {/* Conditionally render Login/Logout button */}
                        {!isLoggedIn ? (
                            <Link to="/login" className="btn btn-secondary ms-2">
                                Login
                            </Link>
                        ) : (
                            <button onClick={handleLogout} className="btn btn-danger ms-2">
                                Logout
                            </button>
                        )}

                        <Link to="/cart" className="btn btn-warning ms-2">
                            Shopping Cart
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
