import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaTimes } from 'react-icons/fa';

const Map = ({ showMap, setShowMap }) => {
    const closeMap = () => setShowMap(false);
    const position = [43.3227075, 21.91345];

    return (
        <>
            <div className={!showMap ? 'map-modal' : 'map-modal show'}>
                <MapContainer
                    center={[43.3226151, 21.9076525]}
                    zoom={13}
                    className={!showMap ? 'map' : 'map show'}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className={!showMap ? 'overlay' : 'overlay show'} onClick={closeMap}>
                <FaTimes className='map--times' onClick={closeMap} />
            </div>
        </>
    )
}

export default Map;