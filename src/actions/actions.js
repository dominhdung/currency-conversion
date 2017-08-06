import { createActions, createAction } from 'redux-actions';
import {
  RECEIVE_RESULT_RATES,
  DO_CONVERSION,
  CHANGE_AMOUNT,
  CHANGE_TARGET,
  UPDATE_CURRENT_RATE,
  RETRIEVE_RATES,
} from '../shared/constants';
//export default createActions({}, ...Object.values(actionTypes));

/*
export const retrieveRates = createAction(RETRIEVE_RATES);
export const receiveResultRates = createAction(RECEIVE_RESULT_RATES);
export const updateCurrentRate = createAction(UPDATE_CURRENT_RATE);
export const changeAmount = createAction(CHANGE_AMOUNT);
export const changeTarget = createAction(CHANGE_TARGET);
export const doConversion = createAction(DO_CONVERSION);
*/


export const { retrieveRates, receiveResultRates, updateCurrentRate, changeAmount, changeTarget, doConversion } =
    createActions(RETRIEVE_RATES, RECEIVE_RESULT_RATES, UPDATE_CURRENT_RATE, CHANGE_AMOUNT, CHANGE_TARGET, DO_CONVERSION)




/*export const retrieveRates = payload => ({ type: RETRIEVE_RATES, payload });

export const receiveResultRates = rates => ({ type: RECEIVE_RESULT_RATES, rates });

export const doConversion = amount => ({ type: DO_CONVERSION, amount });

export const changeAmount = amount => ({ type: CHANGE_AMOUNT, amount });

export const updateCurrentRate = rate => ({ type: UPDATE_CURRENT_RATE, rate });

export const changeTarget = code => ({ type: CHANGE_TARGET, code });*/

