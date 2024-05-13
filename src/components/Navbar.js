import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            B.S
            {/* <i class="fab fa-typo3" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://github.com/dcordova7146/Team4/commits/main/"
                className="nav-links"
                onClick={closeMobileMenu}
                // target="_blank"
                rel="noopener noreferrer"
              >
                Versions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://github.com/dcordova7146/Team4"
                className="nav-links"
                onClick={closeMobileMenu}
                // target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/gameBuilds/BodilessSkeletons.exe"
                className="nav-links"
                download
                onClick={closeMobileMenu}
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
