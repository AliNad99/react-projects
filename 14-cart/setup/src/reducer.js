import CartItem from "./CartItem";

export const ACTIONS = {
    CLEAR_CART: "CLEAR_CART",
    REMOVE: "REMOVE",
    GET_TOTALS: "GET_TOTALS",
    LOADING: "LOADING",
    DISPLAY_ITEMS: "DISPLAY_ITEMS",
    TOGGLE_AMOUNT: "TOGGLE_AMOUNT"
}


const reducer = (state,action) => {
    switch (action.type){
        case ACTIONS.CLEAR_CART:
            return {...state, cart: []};
        case ACTIONS.REMOVE:
            let newCart = state.cart.filter(item => {
                return item.id !== action.payload
            })
            return (
                {...state, cart: newCart}
            )

        case ACTIONS.TOGGLE_AMOUNT:
            const toggledAmountCart = state.cart.map(item => {
                if(item.id === action.payload.id){
                    return {...item, amount: item.amount + action.payload.type}
                } else {
                    return item
                }
            }).filter(cartItem => {
                return cartItem.amount != 0
            })
            return {...state, cart: toggledAmountCart}
        // case ACTIONS.GET_TOTAL_PRICE:
        //     let totalPrice = 0;
        //     state.cart.map(item => {
        //         return totalPrice = totalPrice + item.amount * item.price
        //     })
        //     totalPrice = Math.round(totalPrice *100) * 0.01

        //     return {...state, total: totalPrice}
        // case ACTIONS.GET_TOTAL_AMOUNT:
        //     let totalAmount = 0;
        //     state.cart.map(item => {
        //         return totalAmount = totalAmount + item.amount
        //     })

        //     return {...state, amount: totalAmount}
        case ACTIONS.GET_TOTALS:
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                cartTotal.amount += amount;
                cartTotal.total += price * amount;
                return cartTotal
            }, {
                total: 0,
                amount: 0,
            })
            total = total.toFixed(2)
            return {...state, total: total, amount: amount}
        case ACTIONS.LOADING:
            return {...state, loading:true}
        case ACTIONS.DISPLAY_ITEMS:
            return {...state, loading:false, cart: action.payload}
    }
}

export default reducer;