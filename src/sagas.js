import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA } from "./actionType";
import { fetchData , fetchSourceData} from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    console.log("getApiData")
    // do api call
    const data = yield call(fetchData);
    yield put({type: 'RECEIVE_API_DATA', data});
  } catch (e) {
    console.log(e);
  }
}

function* getSourceData(action) {
  try {
    console.log("getSourceData",action)
    // do api call
    const data = yield call(fetchSourceData,action.param);
    yield put({type: 'RECEIVE_SOURCE_DATA', data});
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  console.log("Root Saga  called");
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(REQUEST_SOURCE_DATA, getSourceData);
}
