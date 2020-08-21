import React from 'react'
import './searchCss/SingleResult.css'
import PawRating from './PawRating' 

const SingleResult = () => {
    

return(
    <div className='single-result'>
        <img className="image" src="https://via.placeholder.com/175" alt="image" />
        <div className="info">
            <h2 class="subtitle">General Info</h2>
            <PawRating />
            <p>$$</p>
        </div>
        <div className="contact">
        <p>Number</p>
        <p>Address</p>
        </div>
        
    </div>
)


}

export default SingleResult