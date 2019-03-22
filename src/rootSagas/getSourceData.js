import { call, put } from "redux-saga/effects";
import { fetchSourceData} from "../helper/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


export function* getSourceData(action) {
  try {

    // do api call
    const data = yield call(fetchSourceData,action.param);
    yield put({type: 'RECEIVE_SOURCE_DATA', data});
  } catch (e) {
    console.log(e);
  }
}
