const initialState = {
    value: 'start',
  };
  
  const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          value: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sliderReducer;