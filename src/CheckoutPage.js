import React from 'react'
import "./CheckoutPage.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function CheckoutPage() {
    const[{basket}]=useStateValue();
    return (
        <div className="checkoutpage">
        <div className="check_left">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Pay/LPA/WelcomePackNew/GW/T1/Hero-PC-1x._CB413705175_.jpg"
           alt="" className="chekout_logo"/>  
        {
            basket?.length===0 ?(
                <div>
                    <h2>your basket is empty</h2>
                </div>
            ):(
               <div>
               <h2>your shopping basket</h2>
               {
                   basket.map(item =>(
                       <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                       />
                   ))
               }
               </div>
            )
        }
        </div>
        {
            basket.length>0 &&(
                <div className="check_right">
                <h1>Sub Total</h1>
                 <Subtotal/>
                </div>
            )
        }
        </div>
    );
}

export default CheckoutPage
