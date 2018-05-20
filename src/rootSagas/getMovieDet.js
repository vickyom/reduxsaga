import { call, put } from "redux-saga/effects";
import { fetchMoviesDetails,fetchMoviesReviews} from "../helper/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


export function* getMovieDet(action) {
  try {
    
    // do api call
    const data = yield call(fetchMoviesDetails,action.param);
    const Reviewdata = yield call(fetchMoviesReviews,action.param);
    
    // yield put({type: 'RECEIVE_MOVDET_DATA', paylod: {data,Reviewdata} });

    yield put({type: 'RECEIVE_MOVDET_DATA', payload: {data, Reviewdata} });

  } catch (e) {
    console.log(e);
  }
}
