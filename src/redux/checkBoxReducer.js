const initialState = {
    value: '',
  };
  
  const checkBoxReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CHECK':
        return {
          ...state,
          value: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default checkBoxReducer;