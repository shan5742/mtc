import React, { useState, useEffect, useRef } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai"
import "./nav.css"
import Logo from "../../images/logo.svg"
import ButtonSecondary from "../ButtonSecondary"
import useWindowWidth from "../../hooks/useWindowWidth"

const Nav = props => {
  const width = useWindowWidth()
  const [mobile, setMobile] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [navTopStyle, setNavTopStyle] = useState(false)
  const navRef = useRef()
  navRef.current = navTopStyle
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10
      if (navRef.current !== show) {
        setNavTopStyle(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleToggle = () => {
    setOpenMobile(openMobile => !openMobile)
  }

  useEffect(() => {
    if (width <= 1200) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width])

  if (mobile)
    return (
      <header className="navbar">
        <nav className="navbar__mobile">
          <div>
            <img
              alt="logo"
              style={openMobile ? { display: "none" } : null}
              src={Logo}
            />
          </div>
          <div>
            {openMobile ? (
              <AiOutlineClose
                className="navbar__hamburger"
                size={30}
                color={"white"}
                onClick={handleToggle}
              />
            ) : (
              <GiHamburgerMenu
                onClick={handleToggle}
                className="navbar__hamburger"
                size={30}
                color={"white"}
              />
            )}
          </div>
        </nav>
        {openMobile && (
          <div className="mobile__drawer">
            <img alt="logo" className="mobile__drawer__logo" src={Logo} />
            <div className="mobile__drawer__list">
              <ul>
                <li>
                  <a href="/">shop</a>
                </li>
                <li>
                  <a href="/">plan my kitchen</a>
                </li>

                <li>
                  <a href="/">about us</a>
                </li>
                <li>
                  <a href="/">gallery</a>
                </li>
                <li>
                  <a href="/">my order</a>
                </li>
              </ul>
            </div>
            <div className="mobile__drawer_social">
              <AiFillFacebook className="icon" size={30} />
              <AiFillTwitterSquare className="icon" size={30} />
              <AiFillInstagram className="icon" size={30} />
            </div>
          </div>
        )}
      </header>
    )

  return (
    <header className={navTopStyle ? "navbar" : "alternative-navbar"}>
      <nav className="navbar__navigation">
        <div className="navbar__list__items">
          <ul>
            <li>
              <AiFillFacebook className="icon" size={30} />
              <AiFillTwitterSquare className="icon" size={30} />
              <AiFillInstagram className="icon" size={30} />
            </li>
            <li>
              <a href="/">shop</a>
            </li>
            <li>
              <a href="/">plan my kitchen</a>
            </li>
            <li>
              <img alt="logo" src={Logo} />
            </li>
            <li>
              <a href="/">about us</a>
            </li>
            <li>
              <a href="/">gallery</a>
            </li>
            <li>
              <ButtonSecondary className="navbar__button">
                my order{" "}
                <AiOutlineShoppingCart
                  className="navbar__button__icon"
                  size={30}
                />
              </ButtonSecondary>
            </li>
          </ul>
        </div>
      </nav>
      {!navTopStyle && <hr className="navbar__hr" />}
    </header>
  )
}

export default Nav
