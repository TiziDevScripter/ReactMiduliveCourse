export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []
export const cartActionsReducer = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    TAKE_OUT_ONE_FROM_CART: 'TAKE_OUT_ONE_FROM_CART'
}
export function cartUpdate(state) {
    window.localStorage.setItem('cart', JSON.stringify(state))
    return state
}
export function cartReducer(state, action) {
    const { type: actionType, payload: actionPayload } = action
    switch(actionType) {
        case cartActionsReducer.ADD_TO_CART: {
            const isProductInCart = state.findIndex(item => item.id == actionPayload.id)

            if(isProductInCart >= 0) {
                const newState = structuredClone(state)
                newState[isProductInCart].quantity += 1
                return cartUpdate(newState)
                // return newState
            }

            const newCart = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            return cartUpdate(newCart)
        }

        case cartActionsReducer.REMOVE_FROM_CART: {
            const newCart = state.filter(item => item.id !== actionPayload.id)
            return cartUpdate(newCart)
        }

        case cartActionsReducer.CLEAR_CART: {
            const newCart = cartInitialState
            return cartUpdate(newCart)
        }

        case cartActionsReducer.TAKE_OUT_ONE_FROM_CART: {
            const newState = structuredClone(state)
            const productInCart = state.indexOf(actionPayload)
            newState[productInCart].quantity -= 1
            
            if(newState[productInCart].quantity == 0) newState.splice(productInCart, 1) 
            return cartUpdate(newState)
        }
    }
}