import React, { useContext } from "react"

import Image from "../components/Image"
import { getClass } from "../utilities"
import { Context }  from "../context/Context"

function Photos() { // this Photos component is to show all the image photos
// Get the allPhotos array from context
// map over it, creating <Image /> elements of the component we just made
// <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

    const { photos } = useContext(Context) // this grabs the "photos state" passed down from the React Context file that we got
    
    const displayPhotos = photos.map((photo, index) => {
        const { id, url } = photo
        return (
            <Image key={id} className={getClass(index)} url={url}/>
        )
    })

    console.log(photos)

    return (
        <main className="photos">
            <h1>{displayPhotos}</h1>
        </main>
    )
}

export default Photos