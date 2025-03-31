const initialState = {
    items: [],
    totalPrice: 0,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          totalPrice: state.totalPrice + action.payload.price,
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;
  