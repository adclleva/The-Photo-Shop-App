import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import { ContextProvider } from './context/Context'; // we set up the index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)

/** Here we set the the Router to wrap around the App component in order get the functionalities from the react router  */
/** Here we also wrap the App with the ContextProvider in order for our app to easily get props from the data's context that we created */
ReactDOM.render(
    <ContextProvider> {/** we use the ContextProvider component in order to pass down the values that we have */}
        <Router>
            <App />
        </Router>
    </ContextProvider>

        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
