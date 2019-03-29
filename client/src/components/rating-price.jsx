import React from "react";
import Starratings from 'react-star-ratings';


const Price = props => {
  return <div>
    <p> ${props.data && props.data.price} a night</p>
    <Starratings 
    rating = {props.rating}/>
    
  </div>
}

 
export default Price;