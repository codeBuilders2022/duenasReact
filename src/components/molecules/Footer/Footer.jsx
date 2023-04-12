import React, { useEffect, useState } from 'react'

import  './Footer.scss'
import duenas_logo from '../../../assets/images/duenas_logo.png'
import facebook from '../../../assets/images/facebook.svg'
import instagram from '../../../assets/images/instagram.svg'
import twitter from '../../../assets/images/twitter.svg'
import gear from '../../../assets/images/gear.svg'
import { NavLink } from 'react-router-dom'


const Footer = () => {

  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={"Footer"}>
      <div className={"parent"}>
        <div className={"col1"}></div>
        <div className={"col2"}>
          <img src={duenas_logo} alt=""></img>
        </div>
        <div className={"col3"}>
          <div className={"title"}>SERVICIOS:</div>

          <div className={"colContainer"}>
            <div className={"col1"}>
              <div className={"text"}>- Pintura</div>
              <div className={"text"}>- Albañilería.</div>
              <div className={"text"}>- Vitropiso y azulejo</div>
              <div className={"text"}>- Acabados</div>
              <div className={"text"}>- Servicio eléctrico</div>
              <div className={"text"}>- Fontanería</div>

            </div>
            <div className={"col2"}>
              <div className={"text"}>- Remodelaciones</div>
              <div className={"text"}>- Herrería:</div>
              <div className={"text"}>- Puertas</div>
              <div className={"text"}>- Ventanas</div>
              <div className={"text"}>- Barandales</div>
              <div className={"text"}>- Tablaroca</div>
            </div>
          </div>
        </div>
        <div className={"col4"}>
          {
            screenSize?.width > 1000 ?
              <>
                <div className={"title"}>CONTACTO:</div>
                <div className={"text"}>- Nosotros</div>
                <div className={"text"}>- Cotiza</div>
                <div className={"text"}>- Contacto</div>
              </> : <></>
          }
          <div className={"containerSocial"}>
            <img src={facebook} alt=""></img>
            <img src={instagram} alt=""></img>
            <img src={twitter} alt=""></img>
          </div>
        </div>
        <div className={"col5"}>
          <NavLink href='/admin'>
            <img src={gear} className={"gear"} alt="" />
          </NavLink>
        </div>
      </div>
      {/* <div className={bottom}></div> */}
    </div>
  )
}

export default Footer