import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">WikiCountries</Link>
            </div>
        </nav>
    </div>)

}