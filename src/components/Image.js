import React, {useState} from "react" // alot of the applications logic will be inside here

function Image(props) { // we deconstuct the className and url from props in the arguments
    const { className, url, id } = props
    const [ hovered, setHovered ] = useState(false)

    /** Went here to look at event handlers for hovering https://reactjs.org/docs/events.html#mouse-events */
    function handleMouseEnter() {
        setHovered(true)
    }
    
    function handleMouseLeave() {
        setHovered(false)
    }

    const displayHeart = hovered && <i className="icon ion-md-heart-empty favorite"></i> // we use the double & to do conditional rendering
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
