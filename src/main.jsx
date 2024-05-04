import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Protected} from "./components/protected/Protected.jsx";
import {Login} from "./pages/Login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import store, {persistor} from "./stores/store.js";
import {PersistGate} from "redux-persist/integration/react";
import AllExpenses from "./pages/AllExpenses.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: "/login",
                element: (
                    <Protected authentication={false}>
                        <Login/>
                    </Protected>
                ),
            },
            {
                path: "/expenses",
                element: (
                    <Protected authentication={true}>
                        <AllExpenses />
                    </Protected>
                )
            }


        ],
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>,
)
