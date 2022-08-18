import React, { useState } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet";

function Map(props) {

    const [markers, setMarkers] = useState([]);

    function Markers() {
        const map = useMapEvents({
            click: (e) => {
                const latlng = [e.latlng.lat, e.latlng.lng]
                setMarkers([
                    ...markers,
                    latlng
                ])
            }
        });


        const listOfMarkers = markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position} >
                <Popup>
                    This is your activity
                </Popup>
            </Marker>
        )

        return <>{listOfMarkers}</>
    }

    const center = [43.6532, -79.3832]

    return (
        <div className="Map">
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
                />
                <Markers />
            </MapContainer>
        </div>
    );
}

export default Map;