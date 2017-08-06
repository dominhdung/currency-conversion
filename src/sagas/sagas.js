import { takeEvery } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  receiveResultRates,
  updateCurrentRate,
} from '../actions/actions';

import {RETRIEVE_RATES} from '../shared/constants';

export function retrieveRates(id) {
  return fetch(`https://api.fixer.io/latest?base=${id}`)
      .then(response => response.json());
}


export function* fetchRates(action) {
  const objReturn = yield retrieveRates(action.payload.startingCode);

  yield put(receiveResultRates(objReturn));
  const rates = objReturn.rates;
  let rate = 1;
  Object.keys(rates).map((key) => {
    if(key===action.payload.targetCode) {
      return (rate = rates[key]);
    }
  })

  yield put(updateCurrentRate(rate));
}

export function* startup() {
  yield takeEvery(RETRIEVE_RATES, fetchRates);

}

export default function* rootSaga() {
  yield fork(startup);
}
