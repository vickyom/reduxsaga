import { RECEIVE_FILTER_DATA } from "../actionType";

export default (state = {}, action) => {
    console.log("RECEIVE_FILTER_DATA - - -- > ", action)
  switch (action.type) {
    case RECEIVE_FILTER_DATA:
      return {  ...state, filterType: action.filData.filter};
    default:
      return state;
  }
};
