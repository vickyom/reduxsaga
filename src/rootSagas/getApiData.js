import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA } from "../actionType";
import { fetchData } from "../helper/api";


export function* getApiData() {
    try {
      console.log("getApiData")
      // do api call
      const data = yield call(fetchData);
      yield put({type: 'RECEIVE_API_DATA', data});
    } catch (e) {
      console.log(e);
    }
  }