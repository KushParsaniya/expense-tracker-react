import {useSelector} from "react-redux";

function Navbar({ links }) {
    const currentPath = window.location.pathname; // Get current URL pathname

    const isLogged = useSelector(state => state.auth.isLogged);
    return (
        // ... your existing nav code ...
        <ul className="flex space-x-6">
            {links.map((link) => (
                (link.showWhenLogged === null || link.showWhenLogged === isLogged) &&
                <li key={link.label}>
                    <a
                        href={link.href}
                        className={`hover:underline text-gray-700 
                  ${currentPath === link.href ? 'text-blue-500 font-medium' : ''}`} // Check if current path matches
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
        // ... rest of your nav code ...
    );
}

export default Navbar;
