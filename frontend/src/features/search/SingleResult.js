import React from 'react'
import './searchCss/SingleResult.css'
import PawRating from './PawRating' 
import doc from './images/doc.jpg'
import styles from './searchCss/SearchResults.css'

const SingleResult = (props) => {
    if(!props.bussiness) {
        return(<div></div>)
    }
    

return(
    <div className='single-result'>
    
        <img className="image" src={props.bussiness.image_url} alt="image" />
        <div className="info">
            <h2 class="subtitle"><strong> Dr. Rachel Madacsi, </strong> Veterinary Medicine</h2>
            <p>Heart of Brooklyn</p>
            <PawRating />
            
            <p>Accepts most insurance</p>
            <p>Expert on Dogs</p>
            <p>$$<span class="tag"> Test Tag</span></p>
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