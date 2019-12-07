import React from "react" // alot of the applications logic will be inside here

function Image({className}) { // we deconstuct the className from props in the arguments
    return(
        <div className={`${className} image-container`}> {/** the css class will get a className from props and also the image-container*/}
            <img src={""} className="image-grid"/> {/** we are  */}
        </div>
    )
}

export default Image