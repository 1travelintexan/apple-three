import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import myIcon from "../assets/heart-icon.png";

import iconShadow from "leaflet/dist/images/marker-shadow.png";
// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: myIcon, // Replace with your own custom image URL if needed
  iconSize: [32, 48], // Width, height
  iconAnchor: [16, 48], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -48], // Point from which the popup should open
  shadowUrl: iconShadow,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});
export const Map = () => {
  return (
    <MapContainer center={[35.207, -101.832]} zoom={10} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[35.1906, -101.7228]} icon={customIcon}>
        <Popup>
          Home Sweet Home <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};
