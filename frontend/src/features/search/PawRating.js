import React from 'react'
import './searchCss/Rating.css'
import Rating from 'react-rating'
import WhitePaw from './images/WhitePaw.png'
import HalfPaw from './images/HalfPaw.png'
import GrayPaw2 from './images/GrayPaw2.png'

const PawRating = () => {

    return (
        <div className="Rating">
        <Rating
        emptySymbol= <img src={WhitePaw} className="WhitePaw"/>
        fullSymbol="fas fa-paw fa-1x"
        fractions={2}
        readonly
        initialRating={4.5}
      
      />
      <p> 37 Reviews </p>
        
        </div>
       
    )
}

export default PawRating