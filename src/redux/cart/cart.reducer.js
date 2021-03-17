import CartActionTypes from './cart.types'

const INITIAL_STATUS = {
    hidden : true
}

const cartReducer = (state = INITIAL_STATUS, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:  !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;