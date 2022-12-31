import React,{useContext} from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div  className='pro-cart'>
      <img src={productImage} />
      <div className="desc">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        </div>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        
      
    </div>
  );
}

export default CartItem
