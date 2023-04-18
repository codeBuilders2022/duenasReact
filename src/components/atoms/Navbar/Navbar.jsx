import React from "react";

//styles
import "./Navbar.scss";

//Assets
import Phone from "../../../assets/images/icono_telefono.png";
import Ubication from "../../../assets/images/icono_ubicacion.png";
import Facebook from "../../../assets/images/facebook.svg";
import Insta from "../../../assets/images/instagram.svg";
import Tiktok from "../../../assets/images/tiktok_logo.svg";

const Navbar = () => {
  return (
    <div className={"HeaderContact"}>
      <div className={"cnt_h1_img"}>
        <img alt="" src={Ubication} className={"icnos_"} />
        <h1 className={"text_"}>San Carlos #44</h1>
      </div>
      <div className={"cnt_h1_img"}>
        <img alt="" src={Phone} className={"icnos_"} />
        <h1 className={"text_"}>33 3234 4601</h1>
      </div>
      <div className={"cnt_networks"}>
        <a
          href="https://www.facebook.com/osbaldo.duenasmartinez.52?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={Facebook} className={"networks"} />
        </a>
        <a
          href="https://instagram.com/martinezosbaldoduenas?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={Insta} className={"networks"} />
        </a>
        <a
          href="https://www.tiktok.com/@duenas145"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={Tiktok} className={"networks"} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
