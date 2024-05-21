import React from 'react'
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'

const markers = [
      {
        geocode: [28.5275544, 77.0441694],
        popUp: "Hi this is Saroj"
      },
      {
        geocode: [28.5075544, 77.0541694],
        popUp: "Hi this is Manoj"
      },
      {
        geocode: [28.5175544, 77.0641694],
        popUp: "Hi this is Ram"
      }
];

const customIcon = new Icon({
  iconUrl: "/Images/location-img.png",
  iconSize: [38, 38],
  iconAnchor: [17, 46],
  popupAnchor: [3, -40]
})

const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  })
}

const LiveLocation = () => {
  return (
    <div className='live-location-bg'>
        <MapContainer center={[28.5275544, 77.0441694]} zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerClusterGroup 
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
            >
            {markers.map(marker => (
              <Marker position={marker.geocode} icon={customIcon}>
                  <Popup>
                    {marker.popUp}
                  </Popup>
              </Marker>
            ))}
            </MarkerClusterGroup> 
        </MapContainer>
    </div>
  )
}

export default LiveLocation