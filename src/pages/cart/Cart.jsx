import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import { DATAS } from '../../data';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import './cart.css'

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate()
    return (
        <div className='cart'>
           <h1>Your Carts Items</h1>
        <div className="cartItems">
        {DATAS.map((data)=>{
          if(cartItems[data.id] > 0){
            return <CartItem product={data}/>
          }
        })}
        </div>
        <div className="checkout">
        <button className='ctBtn' onClick={()=>navigate('/')}>Continue Shopping</button>
        <p>Total: $ {totalAmount}</p>
       
        </div>
        </div>
    )
}

export default Cart
