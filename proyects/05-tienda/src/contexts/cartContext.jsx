import { createContext, useState } from 'react'

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        const isProductRepeated = cart.findIndex(item => item.id == product.id)
        if(isProductRepeated >= 0) {
            const newCart = structuredClone(cart)
            newCart[isProductRepeated].quantity += 1
            return setCart(newCart)
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
    function removeFromCart(product) {
        setCart(cart.filter(item => item.id !== product.id))
    }

    function clearCart() {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}