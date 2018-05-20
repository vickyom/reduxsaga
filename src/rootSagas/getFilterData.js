import { call, put, takeLatest } from "redux-saga/effects";


export function* getFilterData(filData) {
    try {
      console.log("getFilterData")
      // do api call
  
      yield put({type: 'RECEIVE_FILTER_DATA', filData});
    } catch (e) {
      console.log(e);
    }
  }