import CartWidget from "../CartWidget"
import Dropdown from "./NavBarComponents/Dropdown"
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsDropdownVisible(false);
    }, [location]);

    const toggleDropdown = () => {
    setIsDropdownVisible(prevState => !prevState);
    };
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><button className="btn nav-link btnProd dropdown-toggle" onClick={toggleDropdown}>{isDropdownVisible ? 'Categorias' : 'Categorias'}</button></li>
                    <li className="nav-item"><a className="nav-link" href="../About">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="../Contact">Contacto</a></li>
                </ul>
                <div className="container-fluid">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                </form>
                </div>
                <button className="btn btnh"><CartWidget/></button>
            </div>
    </nav>
    {isDropdownVisible && <Dropdown />}
    </>
}

export default Navbar;