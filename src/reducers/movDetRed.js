import { RECEIVE_MOVDET_DATA } from "../actionType";

export default (state = {moviesDetails:[]}, action) => {
    // console.log("reducers - - -- > ", action)
  switch (action.type) {
    case RECEIVE_MOVDET_DATA:
      return {  ...state, moviesDetails: action.payload};
    default:
      return state;
  }
};
