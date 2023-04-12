import { useState } from 'react'
import React from 'react'

import Button from '../../components/atoms/Button/Button'

import "./App.scss"

//Assets
import A1 from '../../assets/images/a1.png'
import A2 from '../../assets/images/a2.png'
import A3 from '../../assets/images/a3.png'
import A4 from '../../assets/images/a4.png'
import A5 from '../../assets/images/a5.png'
import A6 from '../../assets/images/a6.png'

import E1 from '../../assets/images/e1.png'
import E2 from '../../assets/images/e2.png'
import E3 from '../../assets/images/e3.png'
import E4 from '../../assets/images/e4.png'

import C1 from '../../assets/images/c1.png'
import C2 from '../../assets/images/c2.png'
import C3 from '../../assets/images/c3.png'

import z1 from '../../assets/images/z1.jpg'
import z2 from '../../assets/images/z2.jpg'
import z3 from '../../assets/images/z3.jpg'
import z4 from '../../assets/images/z4.jpg'
import z5 from '../../assets/images/z5.jpg'
import z6 from '../../assets/images/z6.jpg'
import z7 from '../../assets/images/z7.jpg'
import z8 from '../../assets/images/z8.jpg'
import z9 from '../../assets/images/z9.jpg'
import z10 from '../../assets/images/z10.jpg'
import z11 from '../../assets/images/z11.jpg'
import z12 from '../../assets/images/z12.jpg'
import z13 from '../../assets/images/z13.jpg'
import z14 from '../../assets/images/z14.jpg'
import z15 from '../../assets/images/z15.jpg'
import z16 from '../../assets/images/z16.jpg'
import z17 from '../../assets/images/z17.jpg'
import z18 from '../../assets/images/z18.jpg'
import z19 from '../../assets/images/z19.jpg'
import z20 from '../../assets/images/z20.jpg'
import z21 from '../../assets/images/z21.jpg'

import Casco from '../../assets/images/casco.png'
import Bg_ from '../../assets/images/banner_index.jpg'
import BgM_ from '../../assets/images/banner_movil.jpg'


import ViewImage from '../../components/atoms/ViewImage/ViewImage'
// import Cotizador from '../../components/molecules/Cotizador/Cotizador'
// import Cotiza from '@/components/molecules/Cotiza/Cotiza'

export default function App() {

  const works = [
    {
      id: 1,
      img: A1,
      workTitle: "Pintura",
      description: "Tenemos muchos años de experiencia en la industria, especializado en brindar servicios de pintura de alta calidad a precios competitivos."
    },
    {
      id: 2,
      img: A2,
      workTitle: "Albañilería",
      description: "Contamos con muchos años de experiencia en la construcción de estructuras. Estamos para ofrecerte nuestras habilidades y conocimientos para llevar a cabo tu proyecto de construcción."
    },
    {
      id: 3,
      img: A3,
      workTitle: "Servicio Eléctrico",
      description: "Ofrecemos la instalación, mantenimiento y reparación de sistemas eléctricos en hogares, oficinas y otros edificios. Ofrecemos ayuda técnica con enchufes, interruptores, lámparas y otros elementos eléctricos."
    },
    {
      id: 4,
      img: A4,
      workTitle: "Fontanería",
      description: "Ofrecemos una amplia gama de servicios de fontanería, desde la reparación de fugas y desagües hasta la instalación de grifos y duchas, pasando por la limpieza de tuberías y mucho más."
    },
    {
      id: 5,
      img: A5,
      workTitle: "Herrería",
      description: "Ofrecemos una amplia gama de servicios de herrería, desde la fabricación de estructuras metálicas personalizadas hasta la reparación de puertas, ventanas, cercas y mucho más. "
    },
    {
      id: 6,
      img: A6,
      workTitle: "Tablaroca",
      description: "Ofrecemos construcción de paredes y techos hasta la instalación de divisiones y estantes. Trabajo con materiales de alta calidad y herramientas especializadas para garantizar que el resultado final sea seguro, duradero y de alta calidad."
    },
  ]

  const listWorks = [
    {
      id: 1,
      icon: E4,
      number: 20,
      text: "Años",
    },
    {
      id: 2,
      icon: E1,
      number: 350,
      text: "Proyectos completos",
    },
    {
      id: 1,
      icon: E3,
      number: 40,
      text: "Servicios",
    },
    {
      id: 1,
      icon: E2,
      number: 3,
      text: "Países",
    },
  ]

  const Mision = () => (
    <div className={"mision__"}>  
      <h1 className={"title_mision"}>MISIÓN</h1>
      <p className={"description_"}>
        En Dueñas construcciones y servicios, nos comprometemos a proporcionar soluciones de 
        construcción y remodelación personalizadas y de alta calidad para satisfacer las necesidades 
        y expectativas de nuestros clientes. Nuestro objetivo es trabajar de manera eficiente y eficaz 
        para garantizar la satisfacción de las personas y crear hogares duraderos y hermosos que 
        brinden comodidad y felicidad a nuestros clientes y sus familias.
      </p>
    </div>
  )

  const Vision = () => (
    <div className={"mision__"}>  
      <h1 className={"title_mision"}>VISIÓN</h1>
      <p className={"description_"}>
        Dueñas construcciones y servicios, aspiramos a ser líderes en el mercado de la construcción 
        y remodelación de casas en nuestra región. Nos esforzamos por ser reconocidos por nuestra 
        excelencia en el servicio al cliente, calidad de construcción y remodelación, eficiencia y habilidad 
        para proporcionar soluciones personalizadas a nuestros clientes. Buscamos constantemente la innovación y la mejora continua para mantenernos a la vanguardia del mercado de 
        construcción y ser la opción preferida de los clientes que buscan hogares hermosos, duraderos y confortables.
      </p>
    </div>
  )

  const projects = [
    {
      id: 1,
      img: C1,
      descrip: "1. Cuéntanos tu poyecto de construcción.",
      class: "C1"
    },
    {
      id: 2,
      img: C2,
      descrip: "2. Profesionales en Construcción recibirán un aviso de tu proyecto.",
      class: "C2"
    },
    {
      id: 3,
      img: C3,
      descrip: "3. Aquellos que estén interesados se pondran en contacto para darte una cotización.",
      class: "C3"
    },
  ]

  const sect8 = [
    {
      id: 1,
      img: z1,
    },
    {
      id: 2,
      img: z2,
    },
    {
      id: 3,
      img: z3,
    },
    {
      id: 4,
      img: z4,
    },
    {
      id: 5,
      img: z5,
    },
    {
      id: 6,
      img: z6,
    },
    {
      id: 7,
      img: z7,
    },
    {
      id: 8,
      img: z8,
    },
    {
      id: 9,
      img: z9,
    },
    {
      id: 10,
      img: z10,
    },
    {
      id: 11,
      img: z11,
    },
    {
      id: 12,
      img: z12,
    },
    {
      id: 13,
      img: z13,
    },
    {
      id: 14,
      img: z14,
    },
    {
      id: 15,
      img: z15,
    },
    {
      id: 16,
      img: z16,
    },
    {
      id: 17,
      img: z17,
    },
    {
      id: 18,
      img: z18,
    },
    {
      id: 19,
      img: z19,
    },
    {
      id: 20,
      img: z20,
    },
    {
      id: 21,
      img: z21,
    },
  ]

  const [viewImg, setViewImg] = useState(false)
  const [urlImg, setUrlImg] = useState()
  const [showQuoter, setShowQuoter] = useState(false)

  return (
    <div className={"block_"}>
        <div className="secct1">
          <div className='cnt_img1'>
            <img src={Bg_} className='cg_img'/>
            <img src={BgM_} className='cg_imgM'/>
          </div>
            <div className={"inside_a"}>
                <h1>EXPERTOS EN CONSTRUCCIÓN</h1>
                <h3>20 años de Experiencia</h3>
            </div>
        </div>
        <div className={"secct2"}>
            <p className={"secct2_descrip"}>Estas a punto de construir, contáctanos y cotiza tu proyecto</p>
            <Button btnText={"COTIZA AQUÍ"} onClick={()=>{setShowQuoter(true)}}/>
        </div>
        <div className={"secct3"}>
          {works.map((_, idx) => (
            <div className={"inside_3"} key={idx}>
              <div className={"cnt_img"}>
                <img src={_.img} alt="" className={"_img"}/>
              </div>
              <div className={"cnt_descr"}>
                <h1 className={"title_work"}>{_.workTitle}</h1>
                {_.description}
              </div>
            </div>
          ))}
        </div>
        <div className={"secct4"}>
            {listWorks.map((_, idx) => (
              <div className={"inside4"} key={idx}>
                <img src={_.icon} alt="" className={"icon_"}/>
                <label className={"number_"}>{_.number}</label>
                <label className={"descrip"}>{_.text}</label>
              </div>
            ))}
        </div>
        <div className={"secct5"}>
          <div className={"inside_a5"}>
              <Mision />
              <Vision />
          </div>
          <div className={"inside_b5"}>
            <img src={Casco} alt="" className={"cas_co"}/>
          </div>
        </div>
        <div className={"secct6"}>
          <div className={"inside_a6"}>
            <h1 className={"title_6"}>COTIZA TU PROYECTO</h1>
            <div className={"cnt_imgs"}>
              {projects.map((_, idx) => (
                <div className={"block_div"} key={idx}>
                  <img src={_.img} alt="" className={_.class}/>
                  <label className={"_descr_"}>{_.descrip}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={"inside_b6"}>
            <Button btnText={"Pide Cotización Gratis"} className={"btn_yellow"} onClick={()=>{setShowQuoter(true)}}/>
            <p className={"descr_indi6"}>
              Pide precio de constucción. Servicio totalmente gratuito y sin compromiso.
              Tendrás la cotización de tu proyecto.
            </p>
          
          </div>
        </div>
        {/* <div className={ secct7}>
          <h1 className={ title_secct7}>CONTRATA A LOS PROFECIONALES</h1>
          <Button btnText={"COTIZA"} className={"btn_byellow"}/>
        </div> */}
        {/* <Cotiza></Cotiza> */}
        <div className={"secct8"}>
          <div className={"inside_secct8"}>
            <h1 className={"title_8"}>Proyectos</h1>
            <div className={"cont_images"}>
              <div className={"wrap_"}>
                {sect8.map((_, idx) => (
                  <div className={"cnt_img"} key={idx} onClick={() => (setViewImg(true), setUrlImg(_.img))}>
                    <img src={_.img} className={"img_l"} alt=""/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {viewImg && <ViewImage setValue={setViewImg} img_g={urlImg}/>}
          {/* {showQuoter?<Cotizador setOpenModal={setShowQuoter}></Cotizador>:""} */}
        </div>
    </div>
  )
}
