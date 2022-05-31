export const cartReducer = (state, action) => {
  switch(action.type){
    case 'API_CALL_SUCCESS': return {
        ...state, 
        products: action.payload 
    }

    case 'ADD_TO_CART' : return {
      ...state, cart: [...state.cart, {...action.payload, qty: 1}]
    }

    case 'REMOVE_FROM_CART': return {
      ...state, cart: [state.cart.filter((item)=> (
        item.id!==action.payload.id
      ))]
    }
    default: return state;
  }
}
