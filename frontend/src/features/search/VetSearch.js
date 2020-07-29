import React, { useState, useCallback, useRef }  from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import usePlacesAutocomplete, { getGeocode, getLatLng, geocodeByAddress } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox"
import "@reach/combobox/styles.css"
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

  const VetSearch = () => {

     const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libaries,
    });

   const mapRef = useRef()
   const onMapLoad  = useCallback((map) => {
        mapRef.current = map
   }, [])

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading maps";




    const Search = ({ panTo }) => {
        const {ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete ({
            requestOptions: {
                location: {lat: () => 40.71427, lng:() => -74.00597 },
                radius: 100 * 1000
            },

        })
        return(
            <div className="search">
            <Combobox onSelect = { async (address) => {
                try{
                    const results = await getGeocode({address})
                    const  { lat, lng } = await getLatLng(results[0])
                    console.log(lat,lng);
                }catch(error) {
                    console.log("Failed to load location");

                }
                    console.log(address);
            }}
            >
            <ComboboxInput value={value} onChange={(e) => {
                setValue(e.target.value)
            }}
            // disabled={!ready}
            placeholder="Search for a Vet"
            />
            <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && data.map(({id, description}) =>(
                    <ComboboxOption key={id} value={description} />
                ))}
                </ComboboxList>
            </ComboboxPopover>
            </Combobox>
            </div>
        )
    }
    
    return(
        <div>
        <Search />

        <GoogleMap mapContainerStyle={mapContainerStyle} 
        zoom={13} 
        center={center}
        options={options}
        onLoad={onMapLoad}
    
     >
     
        </GoogleMap>
        </div>
    )
  }




export default VetSearch



