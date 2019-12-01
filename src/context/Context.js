import React from 'react'

const Context = React.createContext() // we craeted a new context with React

function ContextProvider({children}) { // we are using functional components for the Context and we can deconstruct the children from the props

    return(
        <Context.Provider value=""> 
            {children} {/** Since this is a custom component we need to render a child prop */}
        </Context.Provider>
    )
}

export {ContextProvider, Context} // we are exporting a named export and we need to export the Context so we can use useContext later on

// # Challenge 2

// Set up the Context for our app.

// 1. In a new file, create a new context with React
// 2. In that same file, create a custom component that renders the Provider of the context you created
// 3. For now, just pass in an empty string "" as the context provider's value prop
// 4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
// 5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)
