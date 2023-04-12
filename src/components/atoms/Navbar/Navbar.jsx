import React from 'react'

//styles
import './Navbar.scss'

//Assets
import Phone from '../../../assets/images/icono_telefono.png'
import Ubication from '../../../assets/images/icono_ubicacion.png'
import Facebook from '../../../assets/images/facebook.svg'
import Insta from '../../../assets/images/instagram.svg'
import Twitter from '../../../assets/images/twitter.svg'

const Navbar = () => {
  return (
    <div className={"HeaderContact"}>
      <div className={"cnt_h1_img"}>
            <img alt='' src={Ubication} className={"icnos_"}/>
            <h1 className={"text_"}>Dirección</h1>
      </div>
      <div className={"cnt_h1_img"}>
            <img alt='' src={Phone} className={"icnos_"}/>
            <h1 className={"text_"}>52 1 33 3234 4601</h1>
      </div>
        <div className={"cnt_networks"}>
            <img alt='' src={Facebook} className={"networks"}/>
            <img alt='' src={Insta} className={"networks"}/>
            <img alt='' src={Twitter} className={"networks"}/>
            {/* <Image alt='' src={Tiktok} className={tik_tok}/> */}
        </div>
        
    </div>
    
  )
}

export default Navbar