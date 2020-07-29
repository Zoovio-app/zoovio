import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import mapStyle from "./mapStyle"
const libaries = ['places']

const mapContainerStyle = {
    width: '100vw',
    height: '60vh'
}
const center = {
    lat: 40.71427,
    lng: -74.00597
}
const options = {
    styles: mapStyle,
    
}

  const VetSearch = () =>{

     const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libaries,
    });
    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading maps";
    
    return(
        <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={7} center={center}
        options={options}>

        </GoogleMap>
        </div>
    )
  }




export default VetSearch

// import React from 'react'
// import { Map, GoogleApiWrapper } from 'google-maps-react'

// const VetSearch = () => {

//     return(
//         <Map
//         google={this.props.google}
//         zoom={7}
//         style={mapStyles}
//         initialCenter = {{lat: 40.7128, lng: 74.0060}}
//         />
//     )
// }

// export default VetSearch ({
//     apikey: REACT_APP_GOOGLE_MAPS_API_KEY
// }) 


