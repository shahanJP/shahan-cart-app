import React from 'react'
import { DATAS } from '../../data'
import Product from './Product'
import './shop.css'
import { Fade } from "react-awesome-reveal";
import Info from '../../components/Info';
const Shop = () => {
    return (
        <div className="shop-container" id="shop">
      
         <h1>Best HeadPhones Online</h1>
         <p>Headphones are available with a wide range of feature sets to make your listening more convenient, useful and pleasurable for your particular listening style.
         Shop the latest in-ear, on-ear, and over-ear headphones.Enjoy the latest designs and colours, all at great prices. </p>
         <div className="shop">
        <div className="products ">
           {DATAS.map((data)=>(
           <Fade delay={3}>
            <Product product={data}/>
            </Fade>
           ))}
        </div>
        <Info/>
        </div>
      </div>
    )
}

export default Shop
