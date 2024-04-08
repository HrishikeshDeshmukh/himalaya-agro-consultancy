import React from 'react'
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
import { FaPhone, FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <div className="nav-wrappper">
                <div className="upper-nav-wrap">
                    <div className="wrap-1">
                        <a className="ele" href=""><MdLocationPin className='icon' />Nagpur - 440023</a>
                        <a className="ele" href=""><FaPhone className='icon' /> 08042754767</a>
                        <a className="ele" href=""><MdMarkEmailUnread className='icon' /> pravinbhongale3@gmail.com</a>
                    </div>

                    <div className="wrap-2">
                        <a className="ele" href=""><FaWhatsapp className='icon' /></a>
                        <a className="ele" href=""><FaFacebook className='icon' /> </a>
                        <a className="ele" href=""><FaInstagram className='icon' /></a>
                    </div>
                </div>

                <div className='lower-nav-wrap'>
                    <div className='logo-wrap'>
                        <img src={Logo} alt="" className='logo'/>
                    </div>
                    <div className='nav-items'>
                        <nav role="navigation">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li className="dropdown"><a href="#" aria-haspopup="true"> All Products</a>
                                    <ul className="dropdown-content" aria-label="submenu">
                                        <li><a href="#">Project-1</a></li>
                                        <li><a href="#">Project-2</a></li>
                                        <li><a href="#">Project-3</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#" aria-haspopup="true">Fresh Fruits</a>
                                    <ul className="dropdown-content" aria-label="submenu">
                                        <li><a href="#">Article-1</a></li>
                                        <li><a href="#">Article-2</a></li>
                                        <li><a href="#">Article-3</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#" aria-haspopup="true">Vegetables</a>
                                    <ul className="dropdown-content" aria-label="submenu">
                                        <li><a href="#">Article-1</a></li>
                                        <li><a href="#">Article-2</a></li>
                                        <li><a href="#">Article-3</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown"><a href="#" aria-haspopup="true">About Us</a>
                                    <ul className="dropdown-content" aria-label="submenu">
                                        <li><a href="#">Article-1</a></li>
                                        <li><a href="#">Article-2</a></li>
                                        <li><a href="#">Article-3</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#" aria-haspopup="true">More</a>
                                    <ul className="dropdown-content" aria-label="submenu">
                                        <li><a href="#">Article-1</a></li>
                                        <li><a href="#">Article-2</a></li>
                                        <li><a href="#">Article-3</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">News & Blogs</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div className="right-btns">
                    <FaCartShopping className='icons' />
                    <FaSearch className='icons' />
                    </div>


                </div>
            </div>

        </>
    )
}

export default Navbar
