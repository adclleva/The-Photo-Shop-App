import React, { useContext} from "react"
import { Context } from "../context/Context"

function CartItem({item}) { // we are deconstructring the prop that will get passed down from the Cart component
    const { removePhotoFromCart } = useContext(Context) // we import the removePhotoFromCart function from the context

    function handleClickRemoveFromCart(photoObj) {
        removePhotoFromCart(photoObj) 
    }

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"
                onClick={() => handleClickRemoveFromCart(item)} 
            ></i> {/** this gets us the onclick ability to delete the item from the cart */}
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem