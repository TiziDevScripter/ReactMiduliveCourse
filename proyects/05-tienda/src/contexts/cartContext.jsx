import { createContext } from 'react'
import { useCartReducerActions } from '../hooks/useCartReducerActions'

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    const {state, addToCart, clearCart, removeFromCart, takeOutOneFromCart} = useCartReducerActions()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart,
            takeOutOneFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}