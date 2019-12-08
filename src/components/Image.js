import React, { useState, useContext } from "react" // we'll be grabbing the state from the Context
import { Context } from "../context/Context" // we'll use the Context object that we created to pass down the isFavorited function
                                             // we do a named import for Context
import PropTypes from "prop-types" // we need to import the prop-types in order to use it

function Image(props) { // we deconstuct the className and url from props in the arguments 
    const { className, photoObj } = props // these props are coming from the Photos page component
    const { url, id, isFavorited } = photoObj // url, id, isFavorited are the properties that come from the photo object               
    
    const [ hovered, setHovered ] = useState(false) // determines if the image is hovered or not
    const [ isCurrentlyFavorited, setIsCurrentlyFavorited ] = useState(isFavorited) //created a state for the image to see if it is favorited so we can put the image on there
                                                                                    // just realized that this may be reduntant but i left it here so it can be easier to understand
    const [ isAddedtoCart, setIsAddedtoCart ] = useState(false) // this sets the current state of this object to check if it's in the cart or not
    
    const { toggleFavorited, addPhotoToCart } = useContext(Context)

    /** Went here to look at event handlers for hovering https://reactjs.org/docs/events.html#mouse-events */
    function handleMouseEnter() { // this handles the state of the image to be hovered and sets it to true
        setHovered(true)
    }
    
    function handleMouseLeave() { // this handles what happens when the image is not hovered and it sets the state to false
        setHovered(false)
    }

    function handleFavoriteClick(photo_id) { // this function handles what happens when a user clicks on the heart
        toggleFavorited(photo_id)
        setIsCurrentlyFavorited(!isCurrentlyFavorited)
    }
     
    function handleAddToCartClick(photo_id) { // this function handles what happens when they click on the add-circle-outline
        if (isAddedtoCart == false) { // this will make sure that the user can add an item to the cart once and it will replace the empty icon circle with a fill add icon
            addPhotoToCart(photo_id) 
            setIsAddedtoCart(true) // we don't want to toggle this as we want the user to add to the cart once
        }
    }

    const displayHeart = isCurrentlyFavorited &&  <i className="icon ion-md-heart favorite"></i> // this is display the filled heart if the state is favorited
    const displayAddedToCart = isAddedtoCart && <i className="icon ion-md-add-circle cart"></i> // this is to indcate that it was added to the cart

    const displayEmptyHeart = hovered && 
                                    <i className="icon ion-md-heart-empty favorite" 
                                       onClick={() => handleFavoriteClick(id)} // we use the onClick to change the isFavorite state for that specific id
                                    ></i> // we use the double & to do conditional rendering

    const displayAddCart = hovered &&
                                     <i className="icon ion-md-add-circle-outline cart"
                                        onClick={() => handleAddToCartClick(id)} // used the onClick to have the functionality to add the image to the cart
                                     ></i>

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        > {/** the css class will get a className from props and also the image-container*/}
            {displayHeart || displayEmptyHeart} {/** this will render if one or the other is true, this may be the incorrect way of using ||*/}
            {displayAddedToCart || displayAddCart} {/** the order of this matters because we want the filled circle to diaply over the empty on if it's been added to the cart */}
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
