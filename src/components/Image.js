import React from "react" // alot of the applications logic will be inside here

function Image(props) { // we deconstuct the className and url from props in the arguments
    const { className, url } = props

    return(
        <div className={`${className} image-container`}> {/** the css class will get a className from props and also the image-container*/}
            <img src={url} className="image-grid"/> {/** we are  displaying the specific image*/}
        </div>
    )
}

export default Image