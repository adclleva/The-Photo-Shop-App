import React, { useState, useEffect } from 'react'

const Context = React.createContext() // we created a new context with React
/**
 * Creates a Context object. When React renders a component that subscribes to this 
 * Context object it will read the current context value from the closest matching Provider above it in the tree.
 */

function ContextProvider({children}) { // we are using functional components for the Context and we can deconstruct the children from the props
    const [ photos, setPhotos ] = useState([]) // this will be an array of all photos our app gets from the API
    const [ cartItems, setCartItems ] = useState([]) // this state array will hold the photos images chosen by the user

    function getPhotos() { // this fetches the data from the API
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        return fetch(url) 
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
            })
    }

    function toggleFavorited(photo_id) { // we don't want to modify state directly and this is to toggle the favorite functionality
        const newPhotosWithFavorited = photos.map(photo => { // we want to get the whole array back with the new changes
            if (photo.id === photo_id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            } else {
                return photo
            }
        })

        setPhotos(newPhotosWithFavorited) // with the new array we re-set the state of the photos
        console.log(photos)
    } // we want to pass this function to our image component

    function addPhotoToCart(photoObj) { // refactored what i had originally so we can use the photoObject and have it to our carts set array
                                        // the photoObj is a prop that is passed from the Photos 
        setCartItems(prevCartItems => [...prevCartItems, photoObj]) // we want to copy the previous items and have them added to the cart
        console.log(cartItems)
    }

    useEffect(() => {
        getPhotos() // we call the getPhotos function to getch the data

    },[]) // this fetches the api and sets it into the photos by using the useEffect hook once the component renders
    
    return(
        <Context.Provider value={{photos: photos, toggleFavorited: toggleFavorited, addPhotoToCart: addPhotoToCart }}> {/** here we pass in an object which is the array of photos using the value of this context provider to be accessed within the child component, in this case it ill be sent to our app*/}
            {children} {/** Since this is a custom component we need to render a child prop */}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we are exporting a named export and we need to export the Context so we can use useContext later on

// this is an example of the data that is given by the API
// {
//     "url": "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true",
//     "id": "1",
//     "isFavorite": false
// }