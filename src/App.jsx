import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar/NavBar.jsx";

function App() {

    const navLinks = [
        {href: '/', label: 'Home',showWhenLogged: null},
        {href: '/expenses', label: 'Expenses', showWhenLogged: true},
        {href: '#support', label: 'Support', showWhenLogged: null},
        {href: '#about', label: 'About', showWhenLogged: null},
        {href: '/login', label: 'Login', showWhenLogged: false},
        {href: '#signup', label: 'Sign Up', showWhenLogged: false},
        {href: "/", label: "Logout", showWhenLogged: true}
    ];

    return (
        <>
            <div className="container mx-auto p-6 relative min-h-screen bg-gradient-to-br from-sky-200 to-indigo-200">
            <Navbar links={navLinks}/>
            <br/>
            <Outlet/>
            </div>
        </>
    )
}

export default App
