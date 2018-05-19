import { RECEIVE_API_DATA } from "../actionType";

export default (state = {newsList:[]}, { type, data }) => {

  switch (type) {
    case RECEIVE_API_DATA:
      return {  ...state, newsList: data};
    default:
      return state;
  }
};
