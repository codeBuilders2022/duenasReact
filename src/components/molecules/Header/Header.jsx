import React, { useEffect, useState } from 'react'

import './Header.scss'

//Assets
import Logo from '../../../assets/images/duenas_logo.png'
import Menu_movil from '../../../assets/images/menu_white.png'
import { NavLink } from 'react-router-dom'


const Header = () => {

  const [navbarState, setNavbarState] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const secctions = [
    { id: 2, label: "Home", url: "/" },
    { id: 3, label: "Nosotros", url: "/" },
    { id: 4, label: "Servicios", url: "/services" },
    { id: 4, label: "Cotiza", url: "/services" },
    { id: 5, label: "Contacto", url: "/contact" },
  ]


  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbarState(true)
    }
    else {
      setNavbarState(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBg)
  }, [])


  return (
    <header className={`cnt_header ${navbarState && "active"}`}>
      <nav className={"cnt_nav"}>
        <div className={"cnt_logo"}>
          <NavLink to={"/"}>
            <img src={Logo} alt="" className={"logo_"} />
          </NavLink>
        </div>
        <ul className={"navigation"}>
          {secctions.map((_, idx) => (
            <li key={idx} className={"links_"}>
              <NavLink to={_.url}>
                {_.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={"cnt_menu"} onClick={() => setOpenMenu(true)}>
          <img src={Menu_movil} alt="" className={"menu_"} />
        </div>
        {openMenu &&
          <div className={"bg_white_"}>
            <div className={"cnt_links_"}>
              <label className={"close_modal"} onClick={() => setOpenMenu(false)}>X</label>
              <ul className={"navigation__"}>
                {secctions.map((_, idx) => (
                  <li key={idx} className={"links__a"} onClick={() => setOpenMenu(false)}>
                    <NavLink to={_.url}>
                      {_.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header