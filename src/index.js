import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./store";
import {store} from "./store";
import { NavigationProvider } from "./context/navigation";
import { DataProvider } from "./context/api_data";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <DataProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </DataProvider>
    </NavigationProvider>
)