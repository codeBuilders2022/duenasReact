import React from "react";
import { useState } from "react";
import Cotizador from "../Cotizador/Cotizador";
import'./Cotiza.scss'

const Cotiza = ()=>
{
    const [openModal,setOpenModal] = useState();
    return(
        <>
            <div className={"Cotiza"} id="cotiza">
                <div className={"CotizaContent"}>
                    <div className={"title"}>CONTRATA A LOS PROFESIONALES</div>
                    <button onClick={()=>{setOpenModal(true)}}>COTIZA</button>
                </div>
            </div>
            
            {openModal?<><Cotizador setOpenModal={setOpenModal}></Cotizador></>:""}
        </>
    )
}
export default Cotiza
