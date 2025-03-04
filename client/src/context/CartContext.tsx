{/*} this is teh staring code for the cart context  items will be stored as data in backend evventualy 
import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);


    const addToCart = (item) => {
        setCartItems([
            ...cartItems,
            item
        ])
    }

    const removeFromCart = (id) => {
        const targetIndex = cartItems.findIndex(item => item.id == id);

        if(targetIndex == -1) {
            console.log("No product found")
        } else {
            const cartItemsCopy = cartItems;
            cartItemsCopy.splice(targetIndex, 1);

            setCartItems(cartItemsCopy)
        }

    }


    return (
        <CartContext.Provider value={{
            addToCart,
            removeFromCart,
            cartItems
        }}>
            {children}
        </CartContext.Provider>

    )

} 
*/}