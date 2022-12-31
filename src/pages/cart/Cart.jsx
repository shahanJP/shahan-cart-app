import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { DATAS } from '../../data';
import CartItem from './CartItem';
import { HashLink } from 'react-router-hash-link';
import './cart.css'

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    
    return (
        <div className='cart' id="cart">
           <h1>Your Carts Items</h1>
        <div className="cartItems">
        {DATAS.map((data)=>{
          if(cartItems[data.id] > 0){
            return <CartItem product={data}/>
          }
        })}
        </div>
        <div className="checkout">
        <p>Total: $ {totalAmount}</p>
        <button className='ctBtn' ><HashLink smooth to="#shop" className='link'>Continue Shopping</HashLink></button>
        
       
        </div>
        </div>
    )
}

export default Cart
