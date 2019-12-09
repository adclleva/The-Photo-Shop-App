import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

function Header() {
    const {cartItems} = useContext(Context)

    function displayCarts() {
        if (cartItems.length > 0) { // this means if the cart is not empty we return a cart filled icon
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else { // if the cart is empty, we return a cart that is empty
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return (
        <header>
            <Link to="/">
                <h2>The Photo Shop</h2>
            </Link>

            <Link to="/cart">
                {displayCarts()} {/** we render this function that is called and returns an icon */}
            </Link>

        </header>
    )
}

export default Header
