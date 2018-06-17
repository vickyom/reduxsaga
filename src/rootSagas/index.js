import { takeLatest,call,fork } from "redux-saga/effects";

import { REQUEST_API_DATA,REQUEST_SOURCE_DATA,REQUEST_POPULAR_DATA,REQUEST_MOVDET_DATA,REQUEST_FILTER_DATA,REQUEST_SEARCH_DATA  } from "../actionType";
import { getApiData } from "./getApiData";
import { getSourceData } from "./getSourceData";
import { getPopularData } from "./getPopularData";
import { getMovieDet } from "./getMovieDet";
import { getFilterData } from "./getFilterData";
import { getSearch } from "./getSearch";



// worker Saga: will be fired on REQUEST_API_DATA actions

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
  yield takeLatest(REQUEST_MOVDET_DATA, getMovieDet);
  yield takeLatest(REQUEST_FILTER_DATA, getFilterData);
  // yield takeLatest(REQUEST_SEARCH_DATA, getSearch);
  yield fork(getSearch)
  
}
