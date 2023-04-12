import InputNumber from "../../components/atoms/InputNumber/InputNumber";
import InputText from "../../components/atoms/InputText/InputText";
import { ColorValidation, SubmitValidation, UpdateValue } from "../../utils/Validations";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './admin.scss'
const strapyServer = process.env.REACT_APP_STRAPI_SERVER;

const Admin = () => {
    const ingresar = () => {
        if (SubmitValidation(inputList, setInputList)) {
            console.log("eadcas")
            if (inputList.user.value == "OsvaldoAdministrador@pricesCotyzer" && inputList.pass.value == "P@$$w0rd0sv@lad0@Dmin") {
                setCorrectCredentials(true)
                console.log("entro")
            }
            else {
                alert("credenciales incorrectas")
                setCorrectCredentials(false)
                console.log("no entro")
            }
        }
    }

    const saveNewPrice = () => {
        if (SubmitValidation(inputListPrice, setInputListPrice)) {
            alert("guardado")
            setCorrectCredentials(false)
            const data = {
                "data":{
                    "albanil": inputListPrice.albañileriaC.value,
                    "pintura": inputListPrice.pinturaC.value,
                    "tablaroca": inputListPrice.tablarocaC.value
                }
            }
            axios.put(`${strapyServer}/api/prices/1`,data)
            .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
        }
        else {
            alert("llene todos los campos requeridos")
        }
    }
    // integracion
    useEffect(() => {
        axios.get(`${strapyServer}/api/prices/1`)
            .then((res) => {
                const data = res.data.data.attributes
                const pricesCopy = { ...inputListPrice }
                pricesCopy.albañileriaC.value = data.albanil
                pricesCopy.pinturaC.value = data.pintura
                pricesCopy.tablarocaC.value = data.tablaroca
                setInputListPrice(pricesCopy)

            })
    },[])

    const [inputList, setInputList] = useState({
        user: { value: null, validationType: "empty" },
        pass: { value: null, validationType: "empty" },

    })
    
    const [inputListPrice, setInputListPrice] = useState({
        albañileriaC: { value: null, validationType: "empty" },
        pinturaC: { value: null, validationType: "empty" },
        tablarocaC: { value: null, validationType: "empty" },
    })

    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList)
            }
        }

    }, [inputList])

    const [correctCredentials, setCorrectCredentials] = useState(false)

    useEffect(() => {
        for (const propertyName in inputListPrice) {
            if (document.getElementById(propertyName) && correctCredentials) {
                ColorValidation(propertyName, inputListPrice)
            }
        }

    }, [inputListPrice, correctCredentials])

    return (
        <>
            <div className={"pageAdmin"}>
                {
                    !correctCredentials ?
                        <>
                            <div className={"loginContainer"}>
                                <div className={"title"}>Administrador</div>
                                <div className={"inputsContainer"}>
                                    <InputText placeholder={"Usuario"} id='user' onChange={(e) => { UpdateValue(e, 'user', inputList, setInputList) }} title={"Usuario"} className={"InputTextClass"} ></InputText>
                                    <InputText placeholder={'Constraseña'} id='pass' onChange={(e) => { UpdateValue(e, 'pass', inputList, setInputList) }} type='password' title={"Password"} className={"InputTextClass"}></InputText>
                                </div>
                                <div className={"ingresarContainer"}>
                                    <button className={"ingresar"} onClick={() => { ingresar() }}>Ingresar</button>
                                </div>
                            </div>
                        </> :
                        <>
                            <div className={"priceContainer"}>
                                <div className={"title"}>Modificador de precios</div>
                                <div className={"inputsContainer"} style={{ marginTop: ' 43px' }}>
                                    <InputNumber value={inputListPrice.albañileriaC.value} inputClassName={"inputNumberClass"} className={"containerInput"} placeholder={"Albañilería"} id='albañileriaC' onChange={(e) => { UpdateValue(e, 'albañileriaC', inputListPrice, setInputListPrice) }} title={"Albañilería"} titleClass={"titleClass"}  ></InputNumber>
                                    <InputNumber value={inputListPrice.pinturaC.value} inputClassName={"inputNumberClass"} className={"containerInput"} placeholder={"Pintura"} id='pinturaC' onChange={(e) => { UpdateValue(e, 'pinturaC', inputListPrice, setInputListPrice) }} title={"Pintura"} titleClass={"titleClass"}></InputNumber>
                                    <InputNumber value={inputListPrice.tablarocaC.value} inputClassName={"inputNumberClass"} className={"containerInput"} placeholder={"Tablaroca"} id='tablarocaC' onChange={(e) => { UpdateValue(e, 'tablarocaC', inputListPrice, setInputListPrice) }} title={"Tablaroca"} titleClass={"titleClass"}></InputNumber>
                                    <div className={"ingresarContainer"}>
                                        <button className={"ingresar"} onClick={() => { saveNewPrice() }}>Actualizar</button>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}
export default Admin