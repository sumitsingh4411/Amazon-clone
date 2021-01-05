import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
function Product({
    id,title,image,rating,price
}) {
    const[{basket},dispatch]=useStateValue();
    const addTobasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price
            }

        })
    }
    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product_rating">
               {
                    Array(rating).fill().map((_)=>(
                       <p style={{color:"yellow",fontSize:"15px"}}>*</p> 
                    ))
                }
            </div> 
            </div>
            <img src={image}
             alt=""/>
             <button onClick={addTobasket}>Add to basket</button>
        </div>
    )
}

export default Product
