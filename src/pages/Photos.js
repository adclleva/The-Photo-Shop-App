import React, { useContext } from "react" // we need this 

import Image from "../components/Image"
import { getClass } from "../utilities"
import { Context }  from "../context/Context"

function Photos() { // this Photos component is to show all the image photos

    const { photos } = useContext(Context) // this grabs the "photos state" passed down from the React Context Object that we got
    
    const displayPhotos = photos.map((photo, index) => {
        const { id, url } = photo
        return (
            <Image key={id} id={id} className={getClass(id)} url={url}/>
        )
    })

    return (
        <main className="photos">
            {displayPhotos}
        </main>
    )
}

export default Photos
