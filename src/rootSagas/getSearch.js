import { takeLatest,fork,take,call,cancel,put } from "redux-saga/effects";
import { delay } from 'redux-saga';
import { fetchSearchResults } from "../helper/api";
import { RECEIVE_SEARCH_DATA } from "../actionType";

export function* getSearch(q) {
  
    let task
   
    // Start a worker listening for `SET_SEARCH` actions.
    while (true) {
      // Read the query from the action
      const q = yield take("REQUEST_SEARCH_DATA")
  
      // If there is any pending search task then cancel it
      if (task) {
        yield cancel(task)
      }
      
      // Create a worker to proceed search
      task = yield fork(handleSearch, q)
    }
  }
  
  function* handleSearch(q) {
   
    // Debounce by 1s. This will lock the process for one second before
    // performing its logic. Since the process is blocked, it can be cancelled
    // by `watchSearch` if there are any other actions.
    yield call(delay, 1000)
  
    // This is basically `api.doSearch(q)`. The call should return a `Promise`
    // that will resolve the server response.
    const results = yield call(fetchSearchResults,q.searchText);
  
    // Dispatch an action to notify the UI
    yield put({type: 'RECEIVE_SEARCH_DATA', results});
  }