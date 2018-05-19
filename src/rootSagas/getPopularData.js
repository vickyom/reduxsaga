import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA } from "../actionType";
import { fetchPopularData } from "../helper/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


export function* getPopularData() {
  try {
  
    // do api call
    const data = yield call(fetchPopularData);
    yield put({type: 'RECEIVE_POPULAR_DATA', data});
  } catch (e) {
    console.log(e);
  }
}
