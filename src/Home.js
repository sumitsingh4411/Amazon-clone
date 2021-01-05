import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="" className="home_image"/>
             <div className="home_row">
             <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/41TUs2Mms+L.__AC_SY200_.jpg"
             />
               <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/415EBh-tfVL._AC_SY200_.jpg"
             />
             </div>
             <div className="home_row">
             <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://images-eu.ssl-images-amazon.com/images/I/A17fPOnXNmL._AC_UL270_SR198,270_.jpg"
             />
               <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/41w+SzuP4VL._AC_SY200_.jpg"
             />
              <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/51cJ2+oOXlL._AC_SY200_.jpg"
             />
             </div>
             <div className="home_row">
             <Product
                 id="1234561"
                 title="The lean startup: How constatnt is this is not"
                 price={11.96}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/7173oa2fxXL._AC_UY218_.jpg"
             />
           </div>
        </div>
    )
}

export default Home
