
import { RECEIVE_SIMMOV_DATA } from "../actionType";

export default (state = {simMovData:[]}, action) => {
    // console.log("RECEIVE_SIMMOV_DATA - - -- > ", action.getSimilarMov)
  switch (action.type) {
    case RECEIVE_SIMMOV_DATA:
      return {  ...state, simMovData: action.getSimilarMov};
    default:
      return state;
  }
};
