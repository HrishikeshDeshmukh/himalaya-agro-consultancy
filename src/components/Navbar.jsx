import React, { useState } from "react";
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
import { FaPhone, FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isnavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handalnavbarOpen = () => {
    setIsNavOpen(true);
  };
  const handalnavbarClose = () => {
    setIsNavOpen(false);
  };

  const handalSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="nav-wrappper">
        <div className="upper-nav-wrap">
          <div className="wrap-1">
            <a className="ele" href="">
              <MdLocationPin className="icon" />
              Nagpur - 440023
            </a>
            <a className="ele" href="">
              <FaPhone className="icon" /> 08042754767
            </a>
            <a className="ele" href="">
              <MdMarkEmailUnread className="icon" /> pravinbhongale3@gmail.com
            </a>
          </div>

          <div className="wrap-2">
            <a className="ele" href="">
              <FaWhatsapp className="icon" />
            </a>
            <a className="ele" href="">
              <FaFacebook className="icon" />{" "}
            </a>
            <a className="ele" href="">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        <div className="lower-nav-wrap">
          <div className="logo-wrap">
            <img src={Logo} alt="" className="logo" />
          </div>

          <div className="nav-items">
            <nav role="navigation">
              <ul className={isnavOpen ? "" : "hidediv"}>
                <li>
                  <a href="#">
                    <strong>Home</strong>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" aria-haspopup="true">
                    {" "}
                    <strong> All Products</strong>
                  </a>
                  <ul className="dropdown-content" aria-label="submenu">
                    <li>
                      <a href="#">Project-1</a>
                    </li>
                    <li>
                      <a href="#">Project-2</a>
                    </li>
                    <li>
                      <a href="#">Project-3</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" aria-haspopup="true">
                    <strong>Fresh Fruits</strong>
                  </a>
                  <ul className="dropdown-content" aria-label="submenu">
                    <li>
                      <a href="#">Article-1</a>
                    </li>
                    <li>
                      <a href="#">Article-2</a>
                    </li>
                    <li>
                      <a href="#">Article-3</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" aria-haspopup="true">
                    <strong>Vegetables</strong>
                  </a>
                  <ul className="dropdown-content" aria-label="submenu">
                    <li>
                      <a href="#">Article-1</a>
                    </li>
                    <li>
                      <a href="#">Article-2</a>
                    </li>
                    <li>
                      <a href="#">Article-3</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="#" aria-haspopup="true">
                    <strong> About Us</strong>
                  </a>
                  <ul className="dropdown-content" aria-label="submenu">
                    <li>
                      <a href="#">Article-1</a>
                    </li>
                    <li>
                      <a href="#">Article-2</a>
                    </li>
                    <li>
                      <a href="#">Article-3</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" aria-haspopup="true">
                    <strong> More</strong>
                  </a>
                  <ul className="dropdown-content" aria-label="submenu">
                    <li>
                      <a href="#">Article-1</a>
                    </li>
                    <li>
                      <a href="#">Article-2</a>
                    </li>
                    <li>
                      <a href="#">Article-3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <strong>News & Blogs</strong>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <strong>Contact Us</strong>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="right-btns">
            <FaCartShopping className="icons" />

            {isSearchOpen ? (
              <RxCross2 className="icons cross" onClick={handalSearchOpen} />
            ) : (
              <FaSearch
                className="icons btn-search"
                onClick={handalSearchOpen}
              />
            )}

            {isnavOpen ? (
              <RxCross2 className="icons cross" onClick={handalnavbarClose} />
            ) : (
              <GiHamburgerMenu
                className="three-line icons"
                onClick={handalnavbarOpen}
              />
            )}
          </div>
        </div>

        {isSearchOpen && (
          <div>
            <div className="input-head">
              <input type="text" name="" id="" placeholder="Search Here..."/>
              <FaSearch className="icons btn-search inner-search" />
            </div>
          </div>
        )}
       
      </div>
    </>
  );
};

export default Navbar;
