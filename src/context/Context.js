jimport React, { useState } from 'react'

const Context = React.createContext() // we craeted a new context with React

function ContextProvider({children}) { // we are using functional components for the Context and we can deconstruct the children from the props
    const [ photos, setPhotos ] = useState([]) // this will be an array of all photos our app gets from the API
    
    return(
        <Context.Provider value={{photos: photos}}> {/** here we pass in an object which is the array of photos using the value of this context provider to be accessed within the child component, in this case it ill be sent to our app*/}
            {children} {/** Since this is a custom component we need to render a child prop */}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we are exporting a named export and we need to export the Context so we can use useContext later on