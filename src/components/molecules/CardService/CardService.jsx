import React from "react";
import './CardService.scss'

const CardService = ({image,title,text,position='left'})=>
{
    return(
        <>
            <div className={"CardService"}>
                <div className={"parentCardService"}>
                    <div className={position=="left"? "colCardService1":"colCardService2"}>
                        <img src={image} className={"img"} alt="" />
                    </div>
                    <div className={position=="left"? "colCardService2":"colCardService1"}>
                        <div className={"title"}>{title}</div>
                        <div className={"linea"}></div>
                        <div className={"text"}>{text}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardService