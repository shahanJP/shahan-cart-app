import React, { useState, createContext } from "react";
import { DATAS } from "../data";

//Context api Set Up from react//
export const ShopContext = createContext(null);

const basket=[]

//function to set initial state//
const getCart = () => {
  let cart = {};
  for (let i = 1; i < DATAS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
//Context API Provider Function//
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCart());

  //Adding item to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    basket.push(cartItems)
  };
 //Removing item to Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    basket.pop(cartItems)
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
//Getting and adding price to items
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = DATAS.find((data) => data.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
   //console.log(cartItems)
   //console.log(basket)
 
   //instance to pass state information
  const contextValue = {
    basket,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    ShopContextProvider
  };
  //provider wrapper from react context hooks
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
