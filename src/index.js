import "./index.css"
import 'katex/dist/katex.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import App from "./App";
import "./store";
import {store} from "./store";



const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="*" element={ <App /> }/>
                </Routes>
            </Provider>
    </BrowserRouter>
)