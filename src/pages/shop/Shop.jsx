import React from 'react'
import { DATAS } from '../../data'
import Product from './Product'
import './shop.css'
import { Fade } from "react-awesome-reveal";
import Info from '../../components/Info';
const Shop = () => {
    return (
        <div className="shop-container">
      
         <h1>Buy HeadPhone</h1>
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
