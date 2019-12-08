import React, { useState, useContext } from "react" // we'll be grabbing the state from the Context
import { Context } from "../context/Context" // we'll use the Context object that we created to pass down the isFavorited function
                                             // we do a named import for Context

function Image(props) { // we deconstuct the className and url from props in the arguments 
    const { className, url, id } = props // these props are coming from the Photos page component
    const [ hovered, setHovered ] = useState(false)
    const { toggleFavorited } = useContext(Context)

    /** Went here to look at event handlers for hovering https://reactjs.org/docs/events.html#mouse-events */
    function handleMouseEnter() { // this handles the state of the image to be hovered or not
        setHovered(true)
    }
    
    function handleMouseLeave() {
        setHovered(false)
    }

    function handleFavoriteClick(photo_id) {
        toggleFavorited(photo_id)
    }

    const displayHeart = hovered && 
                                    <i className="icon ion-md-heart-empty favorite" 
                                       onClick={() => handleFavoriteClick(id)} // we use the onClick to change the isFavorite state for that specific id
                                    ></i> // we use the double & to do conditional rendering

    const displayCart = hovered && <i className="icon ion-md-add-circle-outline cart"></i>

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        > {/** the css class will get a className from props and also the image-container*/}
            {displayHeart}
            {displayCart}
            <img src={url} className="image-grid" alt={`${id}`}/> {/** we are  displaying the specific image*/}
        
        </div>
    )
}

export default Image

// alot of the applications logic will be inside here
