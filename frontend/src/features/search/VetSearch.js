import React, {useState}  from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatlng } from "use-places-autocomplete"
import mapStyle from "./mapStyle"

//const [markers, setMarkers] = useState([])
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

    const Search = () => {
        const {ready, value, suggestions: {status, data, setValue, clearSuggestions} } = usePlacesAutocomplete ({
            requestOptions: {
                location: {lat: () => 40.71427, lng:() => -74.00597 },
                radius: 300 * 1000
            }
        })
        return(
            <div>
                
            </div>
        )
    }
    
    return(
        <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} 
        zoom={13} 
        center={center}
        options={options}
    
    Search />

        </GoogleMap>
        </div>
    )
  }




export default VetSearch



