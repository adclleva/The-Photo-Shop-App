import React, { useState, useEffect } from 'react'

const Context = React.createContext() // we created a new context with React
/**
 * Creates a Context object. When React renders a component that subscribes to this 
 * Context object it will read the current context value from the closest matching Provider above it in the tree.
 */

function ContextProvider({children}) { // we are using functional components for the Context and we can deconstruct the children from the props
    const [ photos, setPhotos ] = useState([]) // this will be an array of all photos our app gets from the API
    
    function getPhotos() { // this fetches the data from the API
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        return fetch(url) 
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
            })
    }

    function isFavorited(photo_id) {
        const photosAPI = [...photos] // create a copy of the photos array 
        const newPhotosWithFavorited = photosAPI.map(photo => {
            if (photo.id == photo_id) {
                return {
                    ...photo,
                    isFavorite: true
                }
            } else {
                return photo
            }
        })
        console.log(newPhotosWithFavorited, "isFavorited")
        setPhotos(newPhotosWithFavorited)

    }

    console.log(photos, "Context")


    useEffect(() => {
        getPhotos() // we call the getPhotos function to getch the data
        .then(() => {
            isFavorited(1)
        })
    },[]) // this fetches the api and sets it into the photos by using the useEffect hook once the component renders
    
    return(
        <Context.Provider value={{photos: photos}}> {/** here we pass in an object which is the array of photos using the value of this context provider to be accessed within the child component, in this case it ill be sent to our app*/}
            {children} {/** Since this is a custom component we need to render a child prop */}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we are exporting a named export and we need to export the Context so we can use useContext later on