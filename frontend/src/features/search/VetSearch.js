import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"

const libaries = ['places']
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const center = {
    lat: 40.7128,
    lng: 74.0060
}
const VetSearch = () =>{

    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiLey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libaries
    })
    if(loadError) return "Error loading maps"
    // if(!isloaded) return "Loading maps"
    return(
        <div>
            <p> Hello!</p>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8}></GoogleMap>
        </div>
    )
}


export default VetSearch