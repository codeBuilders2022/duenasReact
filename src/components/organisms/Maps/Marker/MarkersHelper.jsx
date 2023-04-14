// react
import { useEffect, useState } from "react";

// maps
import { Marker, Popup, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import CardMap from "../CardMap/CardMap";

// Helper components below 👇
// Helper for markers

const MarkersHelper = ({ e, id }) => {
    const [activeMarker, setActiveMarker] = useState(null);
    const [center, setCenter] = useState(null);

    // const handleActiveMarker = (marker) => {
    //     if (marker === activeMarker) {
    //         return;
    //     }
    //     setActiveMarker(marker);
    // };
    useEffect(() => {
        setCenter({ lat: e.lat, lng: e.lng });
    }, [e.lat, e.lng]);


    return (
        <>
            <Marker icon={e.icon} key={id} position={[e.lat, e.lng]}>
                <Popup direction="top">
                    <CardMap
                        imgCard={e.imgCard}
                        price={e.price}
                        colony={e.colony}
                        municipality={e.municipality}
                        location={e.location}
                        soil={e.soil}
                        date={e.date}
                        invoice={e.invoice}
                        proficient={e.proficient}
                    />
                </Popup>

                <CircleMarker
                    center={[e.lat, e.lng]}
                    radius={20}
                    weight={1}
                    pathOptions={{ color: "red" }}
                />
            </Marker>
        </>
    );
};

export default MarkersHelper;
