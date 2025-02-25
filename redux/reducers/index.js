import { combineReducers } from 'redux';
import {
  
    SET_OID,
} from '../actions/index';

// Initial state for each value
const initialState = {

    oid : 0
};



const OidReducer = (state = initialState.oid, action) => {
  switch (action.type) {
    case SET_OID:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
 
  oid: OidReducer,
});

export default rootReducer;
