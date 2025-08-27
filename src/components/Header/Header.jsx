import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990);
      if (window.innerWidth > 990) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />

          {!isMobile && (
            <ul className="nav-links">
              <li>
                <a href="#">Наши услуги</a>
              </li>
              <li>
                <a href="#">Статьи</a>
              </li>
              <li>
                <a href="#">Информация</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          )}

          <button className="navbar-btn">Отправить заявку</button>
          <select className="navbar-select">
            <option value="РУС">Рус</option>
            <option value="UZB">Uzb</option>
            <option value="ENG">Eng</option>
          </select>

          {isMobile && (
            <div className="bars" onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          )}
        </nav>

        {isMobile && menuOpen && (
          <ul className="mobile-menu">
            <li>
              <a href="#">Наши услуги</a>
            </li>
            <li>
              <a href="#">Статьи</a>
            </li>
            <li>
              <a href="#">Информация</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
