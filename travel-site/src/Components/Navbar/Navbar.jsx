import React, { useState } from "react";
import './Navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

export default function Navbar() {
    const [active, setActive] = useState('navBardiv');
    const shownav = () => {
        setActive('navBardiv activeNavbar');
    };

    const closeNav = () => {
        setActive('navBardiv');
    };

    return (
        <section className="Navbar">
            <header className="header1 flex">
                <div className="logo">
                    <a href="#" className="logo flex">
                        <h1 className="ban"><MdTravelExplore className="icon" /> SaharaTrip.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navlists flex">
                        <li className="navitem">
                            <a href="#" className="navlink">Home</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">Packages</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">Shop</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">About</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">Pages</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">News</a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNav" onClick={closeNav}>
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>
                <div className="togeleNav" onClick={shownav}>
                    <RiMenu3Fill className="icon" />
                </div>
            </header>
        </section>
    );
}
