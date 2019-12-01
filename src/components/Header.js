import React from "react"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to="/">
                <h2>The Photo Shop</h2>
            </Link>

            <Link to="/cart">
                <i className="icon ion-md-cart ri-fw ri-2x"></i>
            </Link>

        </header>
    )
}

export default Header
