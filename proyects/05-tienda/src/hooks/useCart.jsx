import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export function useCart() {
    const context = useContext(CartContext);

    if(context === undefined) throw new Error('cart context is undefined')

    return context
}