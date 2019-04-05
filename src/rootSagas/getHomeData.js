import { call, put ,all} from "redux-saga/effects";
import { delay } from 'redux-saga'
import { fetchHomeResults } from "../helper/api";


export function* getHome() {
  try {

    const [allData,moviesData,tvData,personData] = yield all([
      call(fetchHomeResults,'all'),
      call(fetchHomeResults,'movies'),
      call(fetchHomeResults,'tv'),
      call(fetchHomeResults,'person'),

    ])

    yield put({type: 'RECEIVE_HOME_DATA',  data:allData});
    yield put({type: 'RECEIVE_TV_DATA', data:tvData});
    yield put({type: 'RECEIVE_PERSON_DATA', data:personData});
    yield put({type: 'RECEIVE_MOVIES_DATA', data:moviesData});




  } catch (e) {
    console.log(e);
  }
}
