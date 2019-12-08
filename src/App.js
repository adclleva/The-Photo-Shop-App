import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Route, Switch } from "react-router-dom"

function App() {    
    return (
        <div>

            <Header />
            <Switch> {/** this switch is here to display any of the components that we want */}
                <Route exact path="/">
                    <Photos /> {/* we will be rendering the Photos Component Page*/}
                </Route>
                <Route exact path="/cart">
                    <Cart /> {/* we will be rendering the Cart Component Page*/}
                </Route>
            </Switch>
            
        </div>
    )
}

export default App