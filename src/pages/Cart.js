import React, { useContext } from "react"
import { Context } from "../context/Context"
// keep in mind that when we enter or exit from this page, it would mount or unmount
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems } = useContext(Context)
    const cartItemElements = cartItems.map((item, index) => {
        return <CartItem item={item} key={index} />
    })

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart