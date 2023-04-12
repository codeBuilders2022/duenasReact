
import React from 'react'

import './ViewImage.scss'

const ViewImage = ({setValue, img_g}) => {
  return (
    <div className={"ViewImage"} onClick={() => setValue(false)}>
        <div className={"inside_ViewImage"}>
            <img src={img_g} alt="" className={"img_as"}/>
        </div>
    </div>
  )
}

export default ViewImage