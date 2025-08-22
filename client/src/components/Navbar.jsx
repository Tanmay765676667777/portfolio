import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Tanmay Nath</h1>
            <div className="space-x-6">
                <Link to = '/' className="hover:text-teal-400">Home</Link>
                <Link to = '/projects' className="hover:text-teal-400">Projects</Link>
                <Link to = '/contact' className="hover:text-teal-400">Contact</Link>
                <Link to = '/about' className="hover:text-teal-400">About</Link>
                <Link to = '/ai' className="hover:text-teal-400">Ai Assistant</Link>
            </div>
        </nav>
    );
};

export default Navbar;