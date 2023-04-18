import React from "react";
import Navbar from "../../atoms/Navbar/Navbar";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import Whatsapp from "../../../assets/images/ws.svg";
import "./Layout.scss";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      <NavLink to="https://wa.me/+5213344703129" className={"ws"}>
        <img src={Whatsapp} alt="" />
      </NavLink>
      {children}
      <Footer />
    </>
  );
}
