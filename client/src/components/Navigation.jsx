import React from 'react';
import '../App.css';
import '../css/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-left">
                <li>
                    <h1 className="navigation-title">
                        <Link to="/" className="navigation-link navigation-title">PC Builds</Link>
                    </h1>
                </li>
                    <li>
                    <Link to="/" className="navigation-link">HOME</Link>
                </li>
            </ul>
            <ul className="navigation-right">
                <li>
                    <Link to="/builds" className="navigation-link">View Builds</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;