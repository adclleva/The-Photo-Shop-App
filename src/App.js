import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Link, Route, Switch } from "react-router-dom"

function App() {    
    return (
        <div>

            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </Switch>
            
        </div>
    )
}

export default App