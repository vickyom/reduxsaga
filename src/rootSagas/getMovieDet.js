import { call, put } from "redux-saga/effects";
import delay from "redux-saga";
import { fetchMoviesDetails,fetchMoviesReviews,fetchSimilarMovies} from "../helper/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


export function* getMovieDet(action) {
  try {

    // do api call
    const data = yield call(fetchMoviesDetails,action.param);
    const Reviewdata = yield call(fetchMoviesReviews,action.param);

    yield put({type: 'RECEIVE_MOVDET_DATA', payload: {data, Reviewdata} });
    yield delay(50000);
    const getSimilarMov = yield call(fetchSimilarMovies,action.param);


    yield put({type: 'RECEIVE_SIMMOV_DATA', getSimilarMov });

  } catch (e) {
    console.log(e);
  }
}
