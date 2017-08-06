import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { handleActions } from 'redux-actions';
import { receiveResultRates, changeTarget, doConversion, changeAmount, updateCurrentRate  } from '../actions/actions';

const defaultState = {
  rates: {},
  startingCode: 'USD',
  startingAmount: 1,
  targetCode: 'USD',
  targetAmount: 1,
  currentRate: 1,
}

const reducer = handleActions({

  [receiveResultRates](state, action) {
    return {
        ...state,
      rates: action.payload.rates,
      startingCode: action.payload.base
    }
  },
  [updateCurrentRate](state, action) {
    return {
        ...state,
      currentRate: action.payload,
      targetAmount: action.payload *state.startingAmount
    }
  },
  [changeAmount](state, action) {
    return {
        ...state,
      startingAmount: action.payload,
      targetAmount: state.currentRate * action.payload
    }
  },
  [changeTarget](state, action) {
    return {
        ...state,
      targetCode: action.payload
    }
  },
  [doConversion](state, action) {
    return {
        ...state,
      targetAmount: action.payload
    }
  }
}, defaultState);

const rootReducer = combineReducers({
  reducer,
  routing: routerReducer,
});

export default rootReducer;
