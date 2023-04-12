import InputNumber from "@/components/atoms/InputNumber/InputNumber";
import InputText from "@/components/atoms/InputText/InputText";
import Select from "@/components/atoms/Select/Select";
import React, { useEffect, useState } from "react";
import styles from './Cotizador.module.scss'
import ws from '../../../assets/images/ws.svg'
import Image from "next/image";
import axios from "axios";


const Cotizador = ({ setOpenModal }) => {
    const [inputM2, setInputM2] = useState()
    const [optionstep1select, setOptionstep1select] = useState(null)
    const [total, setTotal] = useState(null)
    const [price, setPrice] = useState(null)
    const [optionsstep1,setOptionsstep1] = useState( [
        { label: "Albañilería", value: "Albañilería", price: null },
        { label: "Pintura", value: "Pintura", price: null },
        { label: "Servicio Eléctrico", value: "Eléctrico", price: null },
        { label: "Herrería", value: "Herrería", price: "cotizar" },
        { label: "Fontanería", value: "Fontanería", price: null },
        { label: "Tablaroca", value: "Tablaroca", price: null },

    ])
    useEffect(() => {
        axios.get("https://strapi-production-af99.up.railway.app/api/prices/1")
            .then((res) => {
                console.log("res", res)
                const data = res.data.data.attributes
                const optionsstep1Copy = [...optionsstep1]
                optionsstep1Copy[0].price = data.albanil
                optionsstep1Copy[1].price = data.pintura
                optionsstep1Copy[5].price = data.tablaroca
                setOptionsstep1(optionsstep1Copy)
            })
            .catch((error) => {
                console.log("error", error)

            })

    }, [optionsstep1])
    useEffect(() => {
        if (inputM2) {
            optionsstep1.map((item) => {
                if (item.value == optionstep1select) {
                    setTotal(item.price * parseFloat(inputM2)?.toFixed(2))
                }

            })

        }
        else {
            setTotal("00.00")
        }
    }, [inputM2])
    
    useEffect(() => {
        if (optionstep1select) {
            optionsstep1.map((item) => {
                if (item.value == optionstep1select) {
                    setPrice(item.price)
                }

            })

        }
        else {
            setPrice("00.00")
        }
    }, [optionsstep1])
    
    // console.log("inputM2", parseFloat(inputM2)?.toFixed(2))
    // console.log("optionstep1select", optionstep1select)

    return (
        <>
            <div className={styles.Cotizador}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Selecciona el servicio que deseas cotizar</div>
                    <div className={styles.x} onClick={() => setOpenModal(false)}>x</div>
                </div>

                <div className={styles.selectContainer}>
                    <Select className={styles.selectClass} placeholder={"seleccione la mejor opcion"} style={{ marginTop: "60px" }} options={optionsstep1} value={optionstep1select} onChange={(e) => { setOptionstep1select(e.value) }}></Select>
                </div>
                {
                    optionstep1select == "Albañilería" || optionstep1select == "Pintura" || optionstep1select == "Tablaroca" ?
                        <>

                            <div className={styles.selectContainer}>
                                <InputNumber title={"Metros cuadrados"} value={inputM2} placeholder={"ingresa los metros cuadrados"} onChange={(e) => { e.target.value.length< 8&&setInputM2(e.target.value)}}></InputNumber>
                            </div>
                            <div className={styles.selectContainer} style={{ marginTop: "30px" }}>
                                <div className={styles.totalContainer}>

                                    <div> precio por m2 : ${price}</div>
                                    <b>total: ${total}</b>

                                </div>
                            </div>
                        </> :
                        ""
                }
                <div className={styles.contactDirectContainer}>
                    <button className={styles.contactDirect}>
                        <div>Contacto</div>
                        <Image src={ws} className={styles.imgWs} alt=""/>
                    </button>
                </div>

            </div>
            <div className={styles.CotizadorBackground} onClick={() => setOpenModal(false)}></div>
        </>
    )

}
export default Cotizador