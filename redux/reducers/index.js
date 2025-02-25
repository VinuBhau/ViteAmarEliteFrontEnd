import { combineReducers } from 'redux';
import { SET_OID } from '../actions/index';

// Initial state for each value
const initialState = {
  oid: null, // The initial value of 'oid'
};

// Reducer for 'oid'
const OidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OID:
      return {
        ...state, // Spread the existing state
        oid: action.payload, // Update 'oid' with the action's payload
      };
    default:
      return state; // Return the current state if no matching action type
  }
};

// Combine reducers (you can add other reducers here in the future)
const rootReducer = combineReducers({
  oid: OidReducer,
});

export default rootReducer;
