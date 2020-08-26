import React, {useState, useEffect} from 'react'
import api from './api'
const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"

const YelpBussiness = (term, location) => {
    
    const [bussinesses, setBussinesses] = useState([])
    const [resultAmount, setResultAmount] = useState()
    const [searchParams, setSearchParams] = useState({term,location})

    useEffect(() => {
    setBussinesses([])

    const fetchData = async () => {
        try{
            const res = await api.get('/bussinesses/search', searchParams)
            const req = await res.json()
            setBussinesses(req.bussinesses)
            setResultAmount(req.total)
        }catch(error){
            console.log("No Search Results")
        }
     

    }
        fetchData()
    }, [searchParams]);

    return [bussinesses,resultAmount,searchParams,setSearchParams]
}

export default YelpBussiness