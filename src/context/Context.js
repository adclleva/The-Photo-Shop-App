import React, { useState, useEffect } from 'react'

const Context = React.createContext() // we created a new context with React

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

    useEffect(() => {
        getPhotos() // we call the getPhotos function to getch the data
    },[]) // this fetches the api and sets it into the photos by using the useEffect hook once the component renders
    
    return(
        <Context.Provider value={{photos: photos}}> {/** here we pass in an object which is the array of photos using the value of this context provider to be accessed within the child component, in this case it ill be sent to our app*/}
            {children} {/** Since this is a custom component we need to render a child prop */}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we are exporting a named export and we need to export the Context so we can use useContext later on