import { Outlet, Link } from "react-router-dom";
import React from "react";

import "./Layout.css";

const Layout = () => {

    // Use Link so that the Home button actually links to the Home page and use Outlet so that
    // all of the other components rendered will be placed at that location, meaning that
    // with all of later pages, the Home button will be at the top of every page
    return (
        <div className="Layout">
            <nav className="header">
                <h1 className="logo"><Link to="/">CreatorVerse</Link></h1>

                <ul className="main-nav">
                    <li key="home-button">
                        <Link style={undefined} to="/">Home</Link>
                    </li>

                    <li key="create-post-button">
                        <Link style={undefined} to="/create">New Creator</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
                
        </div>
    );
}

export default Layout;