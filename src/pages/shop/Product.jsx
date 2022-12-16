import React,{useContext} from 'react'
import { ShopContext } from '../../context/ShopContextProvider';


const Product = (props) => {
    const { id, productName, price, productImage } = props.product;
     const{addToCart,cartItems} = useContext(ShopContext);
     const cartItemAmount = cartItems[id]
    return (
        <div className="product">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        
        <button className='addBtn' onClick={()=> addToCart(id)}>
        ADD TO CART {cartItemAmount > 0 && <span>({cartItemAmount})</span>} 
        </button>
        </div> 
        </div>
    )
}

export default Product
