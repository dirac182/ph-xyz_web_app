import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import App from "./App";
import "./store";
import {store} from "./store";
import { DataProvider } from "./context/api_data";



const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
        <DataProvider>
            <Provider store={store}>
                <Routes>
                    <Route path="*" element={ <App /> }/>
                </Routes>
            </Provider>
        </DataProvider>
    </BrowserRouter>
)