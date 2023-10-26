import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes} from "react-router-dom";
import App from "./App";

document.addEventListener('DOMContentLoaded', function () {
    createRoot(document.body.appendChild(document.createElement('root')))
        .render(
            /*<React.StrictMode>*/
                <BrowserRouter>
                        <App/>
                </BrowserRouter>
            /*</React.StrictMode>*/
        )
})
