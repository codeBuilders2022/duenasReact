import React from "react";
import serviciosImg from '../../../assets/images/banner_servicios.jpg'
import "./Services.scss"
import a1 from '../../../assets/images/01_servicios_pintura.png'
import a2 from '../../../assets/images/02_servicios_albañileria.png'
import a3 from '../../../assets/images/03_servicios_electrico.png'
import a4 from '../../../assets/images/04_servicios_fontaneria.png'
import a5 from '../../../assets/images/05_servicios_herreria.png'
import a6 from '../../../assets/images/06_servicios_tablaroca.png'
import CardService from "../../../components/molecules/CardService/CardService";
import Cotiza from "../../../components/molecules/Cotiza/Cotiza";

const Services = () => {
    const dataCards = [
        {
            img: a1,
            title: "Pintura",
            text: 'Es un conjunto de trabajos especializados en la construcción y reparación de estructuras. Esto incluye la construcción de paredes, pisos, techos y otros elementos arquitectónicos utilizando diferentes materiales y técnicas específicas. La albañilería es esencial en la industria de la construcción para garantizar la seguridad y calidad de las estructuras.',
            position:"left"
        },
        {
            img: a2,
            title: "Albañilería",
            text: 'Es un conjunto de trabajos especializados en la aplicación de pintura en paredes, techos y otros elementos arquitectónicos de un edificio. Esto puede incluir la preparación de la superficie, la elección del tipo de pintura y la aplicación de la pintura en sí. Los servicios de pintura pueden ser contratados con nosotros para la decoración o el mantenimiento de edificios.',
            position:"right"
        },
        {
            img: a3,
            title: "Servicio eléctrico",
            text: 'Este servicio implica la conexión de los cables eléctricos, enchufes, interruptores y otros dispositivos eléctricos necesarios para proporcionar energía eléctrica a la estructura. Es importante que la instalación eléctrica se realice de acuerdo con las normas de seguridad y reglamentaciones locales para garantizar un uso seguro y eficiente de la electricidad en la estructura.',
            position:"left"
        },
        {
            img: a4,
            title: "Fontanería",
            text: 'Incluye la instalación de tuberías, grifos, desagües, sanitarios y otros dispositivos relacionados con el suministro y drenaje de agua. La fontanería es esencial para la funcionalidad de cualquier edificio y es importante que se realice de acuerdo con los estándares de seguridad y regulaciones locales para garantizar la calidad del agua y la prevención de fugas o daños en la propiedad.',
            position:"right"
        },
        {
            img: a5,
            title: "Herrería",
            text: ' La herrería involucra la creación de piezas de metal, como puertas, ventanas, rejas, barandales y otros elementos decorativos personalizados. Este servicio también incluye la instalación de estas piezas de metal en la propiedad del cliente, y su mantenimiento y reparación. La herrería puede ser utilizada tanto en edificios residenciales como comerciales.',
            position:"left"
        },
        {
            img: a6,
            title: "Tablaroca",
            text: ' La tablaroca es un material de construcción que se utiliza comúnmente para crear paredes interiores y techos falsos, y se puede moldear y adaptar a diversas formas y diseños. El servicio de tablaroca incluye la instalación de estos paneles, su acabado y pintura, y la creación de elementos decorativos personalizados. La tablaroca es una opción popular debido a su fácil instalación y versatilidad.',
            position:"right"
        },
    ]
    return (
        <>
            <div className={"Services"}>
                <div className={"titleServices"}>
                    <img src={serviciosImg} className={"imageBaner"} alt=""/>
                    <div className={"ServiceTilteText"}>SERVICIOS</div>
                </div>
                {dataCards.map((item, key) => {
                    return (
                        <>
                            <CardService position={item.position} image={item.img} title={item.title} text={item.text}></CardService>
                        </>
                    )
                })}
                <Cotiza></Cotiza>
            </div>
        </>
    )
}
export default Services