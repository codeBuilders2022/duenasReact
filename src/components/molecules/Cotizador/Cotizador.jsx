import InputNumber from "../../../components/atoms/InputNumber/InputNumber";
import Select from "../../../components/atoms/Select/Select";
import React, { useEffect, useState } from "react";
import './Cotizador.scss'
import ws from '../../../assets/images/ws.svg'
import axios from "axios";
import { Link, NavLink } from "react-router-dom";


const strapyServer = process.env.REACT_APP_STRAPI_SERVER;
const Cotizador = ({ setOpenModal }) => {


    const [inputM2, setInputM2] = useState()
    const [optionstep1select, setOptionstep1select] = useState(null)
    const [total, setTotal] = useState(null)
    const [price, setPrice] = useState(null)
    const [response, setResponse] = useState()
    const [optionsstep1, setOptionsstep1] = useState([
        { label: "Albañilería", value: "Albañilería", price: null },
        { label: "Pintura", value: "Pintura", price: null },
        { label: "Servicio Eléctrico", value: "Eléctrico", price: null },
        { label: "Herrería", value: "Herrería", price: "cotizar" },
        { label: "Fontanería", value: "Fontanería", price: null },
        { label: "Tablaroca", value: "Tablaroca", price: null },

    ])
    useEffect(() => {



        axios.get(`${strapyServer}/api/prices/1`)
            .then((res) => {

                const data = res.data.data.attributes
                // const optionsstep1Copy = [...optionsstep1]
                // optionsstep1Copy[0].price = data.albanil
                // optionsstep1Copy[1].price = data.pintura
                // optionsstep1Copy[5].price = data.tablaroca
                // setOptionsstep1(optionsstep1Copy)
                setResponse([data])

            })

            .catch((error) => {
                setResponse([data])
            })



    }, [])
    useEffect(() => {
        if (response) {
            const optionsstep1Copy = [...optionsstep1]
            optionsstep1Copy[0].price = response[0].albanil
            optionsstep1Copy[1].price = response[0].pintura
            optionsstep1Copy[5].price = response[0].tablaroca
            setOptionsstep1(optionsstep1Copy)
        }
    }, [response])
    useEffect(() => {
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
    }, [optionstep1select])


    return (
        <>
            <div className={"Cotizador"}>
                <div className={"titleContainer"}>
                    <div className={"title"}>Selecciona el servicio que deseas cotizar</div>
                    <div className={"x"} onClick={() => setOpenModal(false)}>x</div>
                </div>

                <div className={"selectContainer"}>
                    <Select className={"selectClass"} placeholder={"seleccione la mejor opcion"} style={{ marginTop: "60px" }} options={optionsstep1} value={optionstep1select} onChange={(e) => { setOptionstep1select(e.value) }}></Select>
                </div>
                {
                    optionstep1select == "Albañilería" || optionstep1select == "Pintura" || optionstep1select == "Tablaroca" ?
                        <>

                            <div className={"selectContainer"}>
                                <InputNumber title={"Metros cuadrados"} value={inputM2} placeholder={"ingresa los metros cuadrados"} onChange={(e) => { e.target.value.length < 8 && setInputM2(e.target.value) }}></InputNumber>
                            </div>
                            <div className={"selectContainer"} style={{ marginTop: "30px" }}>
                                <div className={"totalContainer"}>

                                    <div> precio por m2 (Sin material): ${price}</div>
                                    <b>total: $ {total.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</b>

                                </div>
                            </div>
                        </> :
                        ""
                }
                <div className={"contactDirectContainer"}>
                    <NavLink to='https://wa.me/+5213332344601' className={"contactDirect"}>
                        <div>Contacto</div>
                        <img src={ws} className={"imgWs"} alt="" />
                    </NavLink>

                </div>

            </div>
            <div className={"CotizadorBackground"} onClick={() => setOpenModal(false)}></div>
        </>
    )

}
export default Cotizador