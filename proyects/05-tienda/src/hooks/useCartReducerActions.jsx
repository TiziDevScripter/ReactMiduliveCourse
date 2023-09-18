import { useReducer } from "react"
import { cartReducer,cartInitialState, cartActionsReducer } from "../reducers/cartReducer"

export function useCartReducerActions() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(product) {
        return dispatch({
            type: cartActionsReducer.ADD_TO_CART,
            payload: product
        })
    }
    function clearCart() {
        return dispatch({type: cartActionsReducer.CLEAR_CART})
    }
    function removeFromCart(product) {
        return dispatch({
            type: cartActionsReducer.REMOVE_FROM_CART,
            payload: product
        })
    }
    function takeOutOneFromCart(product) {
        return dispatch({
            type: cartActionsReducer.TAKE_OUT_ONE_FROM_CART,
            payload: product
        })
    }
    return {state, addToCart, clearCart, removeFromCart, takeOutOneFromCart}
}