import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const removeFrombasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="check">
            <img
                className="check_logo"
                src={image}
                alt=""
            />
            <div className="check_info">
                <p className="check_title">{title}</p>
           <p className="check_price">
               <small>$</small>
               <strong>{price}</strong>
           </p> 
           <div className="check_rating">
               {
                    Array(rating).fill().map((_)=>(
                       <p style={{color:"yellow",fontSize:"15px"}}>*</p> 
                    ))
                }
            </div> 
            <button onClick={removeFrombasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
