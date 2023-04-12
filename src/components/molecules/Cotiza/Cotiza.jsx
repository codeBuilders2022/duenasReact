import React from "react";
import { useState } from "react";
import Cotizador from "../Cotizador/Cotizador";
import styles from './Cotiza.module.scss'

const Cotiza = ()=>
{
    const [openModal,setOpenModal] = useState();
    return(
        <>
            <div className={styles.Cotiza} id="cotiza">
                <div className={styles.CotizaContent}>
                    <div className={styles.title}>CONTRATA A LOS PROFESIONALES</div>
                    <button onClick={()=>{setOpenModal(true)}}>COTIZA</button>
                </div>
            </div>
            
            {openModal?<><Cotizador setOpenModal={setOpenModal}></Cotizador></>:""}
        </>
    )
}
export default Cotiza
