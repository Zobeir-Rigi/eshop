//definning all the application level state and define actions to make changes to the state

export const initialState = {
  basket: [],
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
         default:
            return state;
    }
    }

export default reducer;