import React from "react";
import Product from "./product";
import Cart from './cart';
import { useState } from "react";

function ShoppingCart (){

    const[cartItems,setCartItems]= useState([]);

    const addToCart=(product) => {
      //  setCartItems([...cartItems, {...product, quantity:1}]);
        const existingItem = cartItems.find(item => item.id === product.id);
        console.log(existingItem);
        if(existingItem){
            //increase the quantity 
            const updateCart = cartItems.map(item => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
            console.log("update cart :"+updateCart);
            setCartItems(updateCart);
        }else{
            setCartItems([...cartItems, {...product, quantity:1}]);
        }
        console.log("after add:",cartItems);
        
    }

    return(
        <div>
            <Product product={{id:1, name :"Laptop", description:"Dell"}} onAddToCart={addToCart}/>
            <Product product={{id:2, name :"Mobiles", description:"Samsung"}} onAddToCart={addToCart}/>
            <Cart cartItems={cartItems} />
        </div>
    )
}

export default ShoppingCart;