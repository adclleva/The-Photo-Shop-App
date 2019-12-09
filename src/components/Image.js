import React, { useState, useContext } from "react" // we'll be grabbing the state from the Context
import { Context } from "../context/Context" // we'll use the Context object that we created to pass down the isFavorited function
                                             // we do a named import for Context
import PropTypes from "prop-types" // we need to import the prop-types in order to use it

function Image(props) { // we deconstuct the className and url from props in the arguments 
    const { className, photoObj } = props // these props are coming from the Photos page component
    const { url, id, isFavorite } = photoObj // url, id, isFavorited are the properties that come from the photo object               
    
    const [ hovered, setHovered ] = useState(false) // determines if the image is hovered or not
    const [ isAddedToCart, setIsAddedToCart ] = useState()

    const { photos, cartItems, toggleFavorited, addPhotoToCart } = useContext(Context)

    /** Went here to look at event handlers for hovering https://reactjs.org/docs/events.html#mouse-events */
    function handleMouseEnter() { // this handles the state of the image to be hovered and sets it to true
        setHovered(true)
    }
    
    function handleMouseLeave() { // this handles what happens when the image is not hovered and it sets the state to false
        setHovered(false)
    }

    function handleFavoriteClick(photo_id) { // this function handles what happens when a user clicks on the heart
        toggleFavorited(photo_id)
    }
     
    // the photoObj is what gets passed down as a prop from Photos Component
    function handleAddToCartClick(photoObj) { // this function handles what happens when they click on the add-circle-outline
        if (!isAddedToCart) { // if the item is not in the cart
            addPhotoToCart(photoObj) // this will make sure that the user can add an item to the cart once and it will replace the empty icon circle with a fill add icon
            setIsAddedToCart(true)
        }
    }

    function isItemInCart(photoObj) {
        return cartItems.some(cartItem => { // this returns a boolean if the the current item is in the cart
            return cartItem.id === photoObj.id
        }) 
    }

    useState(() => {
        setIsAddedToCart(isItemInCart(photoObj))
    },[])

    function displayFavorite() { // refactored the displayFavorite icons to be in one function
        if (isFavorite) { // if this is true, it will always display the filled heart icon
            return  <i className="icon ion-md-heart favorite"
                        onClick={() => handleFavoriteClick(id)} // we use the onClick to change the isFavorite state for that specific id 
                    ></i> // this is display the filled heart if the state is favorited
        } else if (hovered) { // if it's only hovered, it will display an empty heart
            return  <i className="icon ion-md-heart-empty favorite" 
                        onClick={() => handleFavoriteClick(id)} // we use the onClick to change the isFavorite state for that specific id
                    ></i> 
        }
    }

    function displayCart() {
        if (isAddedToCart) {
            return <i className="icon ri-shopping-cart-fill cart"></i> // this is to indcate that it was added to the cart
        } else if (hovered) {
            return  <i className="icon ion-md-add-circle-outline cart" 
                        onClick={() => handleAddToCartClick(photoObj)} // used the onClick to have the functionality to add the image to the cart
                    ></i>
        }
    }

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        > {/** the css class will get a className from props and also the image-container*/}
            {displayFavorite()} {/** made sure to render the function with parethesis so it can return either one of icons */}
            {displayCart()} {/** refactored this in the same faction as the displayFavorite() where we call the function to only render one icon */}
            <img src={url} className="image-grid" alt={`${id}`}/> {/** we are  displaying the specific image*/}
        
        </div>
    )
}

// here is adding the propTypes for Type checking the Image component, a link shown below helps with understanding propTypes
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Image.propTypes = { 
    className: PropTypes.string, // since the function returns a string

    photoObj: PropTypes.shape({ // An object taking on a particular shape by specifying their properties
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    }) 
} // it is very good practice to use propTypes for helpng out with validation especially when refactoring, big projects, or working with groups.

export default Image

// alot of the applications logic will be inside here
