import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Skeleton } from "primereact/skeleton";
import marker from "../mapsImg/logo_duena.png"


const OpenStreetMap = ({ centerMap, nameCity, skeleton }) => {

    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        setMapLoaded(true);
    }, []);

    const mapRef = useRef(null);
    useEffect(() => {
        mapRef.current?.setView(centerMap, 15)
    }, [centerMap])

    const iconMap = L.icon({
        iconUrl: marker,
        iconSize: [30, 30],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -40],
        shadowSize: [45, 55],
        shadowAnchor: [0, 25],
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
    });

    return (
        mapLoaded &&
            !skeleton ? (
            <MapContainer
                center={centerMap}
                zoom={17}
                style={{ height: "400px", borderRadius: "10px" }}
                className="map-container"
                ref={mapRef}

            >
                <TileLayer
                    attribution="Google Maps"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />

                <Marker icon={iconMap} position={centerMap} key="marker">

                    <Tooltip>
                        <p>{nameCity}</p>
                    </Tooltip>

                </Marker>

            </MapContainer>
        ) : (
            <div style={{ maxWidth: '1800px', width: '100%' }}>
                <Skeleton width="100%" height="500px" borderRadius="20px" />
            </div>
        )
    );
};

export default OpenStreetMap;
