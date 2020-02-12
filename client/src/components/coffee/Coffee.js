import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "bulma/css/bulma.css";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import * as coffeeData from "../coffee/coffee-shops.json";

function Map(){
    return ( 
    
    <GoogleMap 
    defaultZoom={12} 
    defaultCenter={{lat: 44.977753, lng: -93.265015}} >
   
   {coffeeData.features.map((coffee) => (

     <Marker key = {coffee.attributes.OBEJCTID} position={{lat: coffee.geometry.lat, lng: coffee.geometry.lng}}
     
     icon={{
       url: '/coffee-mug-icon.jpg',
       scaledSize: new window.google.maps.Size(40,40)
     }}
     
     />
   ))}
   </GoogleMap>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function Coffee() {
  return (
    <div className="coffee-map">
      <p className="coffee-head font-effect-neon">Coffee</p>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBcsej_hCDf00etoKPKBacajuaCXL9jC0o'}
        loadingElement={<div style={{height: "80%"}}/>}
        containerElement={<div style={{height: "90%", padding: "10px"}}/>}
        mapElement={<div style={{height: "90%", padding: "10px"}}/>}
      />
    </div>
  );
}
















