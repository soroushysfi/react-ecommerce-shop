export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItems => (
            cartItems.id === cartItemsToAdd.id ?
            {...cartItems, quantity: cartItems.quantity + 1}
            : cartItems
        ))
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]
}