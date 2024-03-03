import { combineReducers } from 'redux';
import sliderReducer from './sliderReducer.js';
import checkBoxReducer from './checkBoxReducer.js';

const rootReducer = combineReducers({
  slider: sliderReducer,
  checkbox:checkBoxReducer
});

export default rootReducer;