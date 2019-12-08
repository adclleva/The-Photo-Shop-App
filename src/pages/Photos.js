import React, { useContext } from "react" // we need this 

import Image from "../components/Image"
import { getClass } from "../utilities"
import { Context }  from "../context/Context"

function Photos() { // this Photos component is to show all the image photos

    const { photos } = useContext(Context) // this grabs the "photos state" passed down from the React Context Object that we got
                                                        
    const displayPhotos = photos.map((photo, index) => {
        const { id, url, isFavorite } = photo // we can get the isFavorited from the Context Provider
                                              // even though we are passing the photo Object itself
                                              // i left the object deconstructed to help us see what's being passed down
        return (
            <Image key={id} className={getClass(id)} photoObj={photo}/>  // refactored to just pass down the photo object itself 
        )
    })

    return (
        <main className="photos">
            {displayPhotos}
        </main>
    )
}

export default Photos
