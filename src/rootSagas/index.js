import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA,REQUEST_POPULAR_DATA  } from "../actionType";
import { fetchData , fetchSourceData} from "../helper/api";
import { getApiData } from "./getApiData";
import { getSourceData } from "./getSourceData";
import { getPopularData } from "./getPopularData";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


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
  yield takeLatest(REQUEST_POPULAR_DATA, getPopularData);
}
