import React from 'react'
import './searchCss/SingleResult.css'
import PawRating from './PawRating' 
import doc from './images/doc.jpg'

const SingleResult = (props) => {
    

return(
    <div className='single-result'>
        <img className="image" src={doc} alt="image" />
        <div className="info">
            <h2 class="subtitle"><strong> Dr. Rachel Madacsi, </strong> Veterinary Medicine</h2>
            <p>Heart of Brooklyn</p>
            <PawRating />
            <p>Accepts most insurance</p>
            <p>Expert on Dogs</p>
        </div>
        <div className="contact">
        <p>718-855-7387</p>
        <p>775 Fulton St.
        Brooklyn, NY 11217</p>
        </div>
        
    </div>
)


}

export default SingleResult