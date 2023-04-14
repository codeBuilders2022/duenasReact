//styles
import "./Maps.scss";

//assets

//react
import { useState, useEffect } from "react";
import OpenStreetMap from "./OpenStreetMap/OpenStreetMap"


const Maps = ({ city }) => {

    const [centerMap, setCenterMap] = useState(city);
    useEffect(() => {
        setCenterMap(city)
    }, [city])


    const [nameCity, setNameCity] = useState("Dueñas Contrucciones y Servicios")

    return (
        <>

            <div className='Maps'>
                <OpenStreetMap nameCity={nameCity} centerMap={centerMap} />
            </div>

        </>
    );
};

export default Maps;
