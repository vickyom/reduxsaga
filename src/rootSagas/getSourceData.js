import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA } from "../actionType";
import { fetchData , fetchSourceData} from "../helper/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


export function* getSourceData(action) {
  try {
    console.log("getSourceData",action)
    // do api call
    const data = yield call(fetchSourceData,action.param);
    yield put({type: 'RECEIVE_SOURCE_DATA', data});
  } catch (e) {
    console.log(e);
  }
}
