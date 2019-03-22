import { call, put ,all} from "redux-saga/effects";
import { delay } from 'redux-saga'
import { fetchHomeResults } from "../helper/api";


export function* getHome() {
  try {

    const [tvData,personData,allData] = yield all([
      call(fetchHomeResults,'tv'),
      call(fetchHomeResults,'person'),
      call(fetchHomeResults,'all')
    ])
    console.log("personData - - >",personData)
    console.log("tvData - - >",tvData)
    yield put({type: 'RECEIVE_HOME_DATA',  data:allData});
    yield put({type: 'RECEIVE_TV_DATA', data:tvData});
    yield put({type: 'RECEIVE_PERSON_DATA', data:personData});




  } catch (e) {
    console.log(e);
  }
}
