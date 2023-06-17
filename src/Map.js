import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [40.63463151377654, -97.89969605983609];

const Map = ({ onCountryClick }) => {
  const geoJSONStyle = {
    fillColor: "#3388ff",
    weight: 1,
    color: "white",
    fillOpacity: 0.7,
  };

  const handleCountryClick = (event) => {
    console.log("Clicked country:", event.target.feature.properties.name);
    onCountryClick(event);
  };

  return (
    <MapContainer
      center={center}
      zoom={1}
      style={{ width: "50vw", height: "50vh", marginLeft:"50px" ,marginTop:"10px" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=roRdBKL1CM3zvPkkP2BD"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <GeoJSON
        style={geoJSONStyle}
        onEachFeature={(feature, layer) => {
          layer.on("click", (event) => {
            console.log("Country click event:", event);
            handleCountryClick(event);
          });
        }}
        url="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
      />
    </MapContainer>
  );
};

export default Map;

