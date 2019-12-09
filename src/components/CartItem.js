import React from "react"

function CartItem({item}) { // we are deconstructring the prop that will get passed down from the Cart component
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem