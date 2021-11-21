export const initialState = {
    basket: [],
    user: null,
    product_d: null,
};
export const getBasketTotal = (basket) => {
    const subTotal = basket?.reduce((acc, item) => acc + item.price, 0);
    return subTotal;
}
export const userId = (userState) => { return userState.providerData[0].uid };

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("The product you tried to delete is not in the basket")
            }
            return {
                ...state,
                basket: newBasket
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SHOW_PRODUCT":
            return {
                ...state,
                product_d: action.item
            };
        default:
            return state;
    }
};

export default reducer;