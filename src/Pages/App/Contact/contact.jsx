import { useEffect, useRef, useState } from "react"
import "./Contact.scss"
import contactImg from "../../../assets/images/banner_contacto.jpg"
import Cotiza from "../../../components/molecules/Cotiza/Cotiza"
import Maps from "../../../components/organisms/Maps/Maps"
import { ColorValidation, SubmitValidation, UpdateValue } from "../../../utils/Validations";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import emailjs from 'emailjs-com';
import { Toast } from 'primereact/toast';

const Contact = () => {
    const [id, setId] = useState(0)
    const toast = useRef(null);
    const data = [
        { id: 0, contry: "México", address: "San Carlos 44, 45690, El Salto, Jalisco ", phone: "33 3234 4601", email: "osanmart.2214@icloud.com", location: [20.6842, -103.3831] },

    ]
    const [inputList, setInputList] = useState({
        name: { value: null, validationType: "empty" },
        email: { value: null, validationType: "email" },
        phone: { value: null, validationType: "empty" },
        message: { value: null, validationType: "empty" },
    })


    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName)) {
                ColorValidation(propertyName, inputList);
                if (propertyName == "email") {
                    ColorValidation(propertyName, inputList, "email");
                }
            }

        }
    }, [inputList])

    // function to reset form values
    function handleReset(e) {
        const resetForm = {
            name: { value: null, validationType: "empty" },
            email: { value: null, validationType: "email" },
            phone: { value: null, validationType: "empty" },
            message: { value: null, validationType: "empty" },
        }
        setInputList(resetForm)
        e.target.reset()
    }

    // function to submit form values
    const sendEmail = (e) => {
        e.preventDefault()
        if (SubmitValidation(inputList, setInputList)) {
            const serviceID = `${process.env.REACT_APP_SERVICEID}`; //protected variables in the .env file
            const templateID = `${process.env.REACT_APP_TEMPLATEID}`; //protected variables in the .env file
            emailjs.init(`${process.env.REACT_APP_KEY}`) //protected variables in the .env file
            emailjs.sendForm(serviceID, templateID, e.target)
                .then((result) => {
                    toast.current.show({ severity: 'info', summary: 'Listo', detail: 'Su información se envió con éxito', });
                    setTimeout(() => {
                        handleReset(e)
                    }, 1000)
                }, (error) => {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: `Lo sentimos: ${error.text}` });
                });
        }
    }

    return (
        <div className='Contact' suppressContentEditableWarning={true}>
            <img src={contactImg} className='imageBaner' alt="imageBanner" />
            <div className='titlee'>
                <h1>Contacto</h1>
            </div>
            <div className='mainContainer'>
                <div className='location'>
                    <div className='barMaps'>
                        {data.map((element, index) => {
                            return (
                                <div key={index} className={index == id ? 'contry active' : 'contry'}
                                    onClick={() => setId(element.id)}>
                                    <p>{element.contry}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className='map_address'>
                        <div className='map'>
                            <Maps city={data[id].location} />
                        </div>
                        <div className='address'>
                            <div className='elements'>
                                <strong>Dirección</strong>
                                <p>{data[id].address}</p>
                            </div>
                            <div className='elements'>
                                <strong>Teléfono</strong>
                                <p>{data[id].phone}</p>
                            </div>
                            <div className='elements'>
                                <strong>E-mail</strong>
                                <p>{data[id].email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formContainer'>
                    <h1>Enviar Mensaje</h1>
                    <div className='line'></div>
                    <form className='form' id="form" onSubmit={sendEmail}>
                        <input type='text' placeholder="Nombre" name={"name"} id="name" value={inputList.name.value} onChange={(e) => { UpdateValue(e, "name", inputList, setInputList) }} />
                        <input type='email' placeholder="E-mail" name={"email"} id="email" value={inputList.email.value} onChange={(e) => { UpdateValue(e, "email", inputList, setInputList) }} />
                        <input type='number' placeholder="Teléfono" name={"phone"} id="phone" value={inputList.phone.value} requiredLabel onChange={(e) => { UpdateValue(e, "phone", inputList, setInputList) }} />
                        <textarea defaultValue="" placeholder="Mensaje" name="message" id="message" value={inputList.message.value} requiredLabel onChange={(e) => { UpdateValue(e, "message", inputList, setInputList) }}></textarea>
                        <button type='submit'>Enviar mensaje</button>
                    </form>
                    <Toast ref={toast} />
                </div>
            </div>
            <Cotiza />
        </div>
    )
}

export default Contact