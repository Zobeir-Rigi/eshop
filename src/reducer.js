//definning all the application level state and define actions to make changes to the state

export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0).toFixed(2);
};

//Selector
// current state and action to make changes to th state
const reducer =(state, action)=>{ // action == dispatch
    switch(action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        }

         case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index>=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
         default:
            return state;
    }
    }

export default reducer;