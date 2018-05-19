import { RECEIVE_SOURCE_DATA } from "../actionType";

export default (state = {}, { type, data }) => {

  switch (type) {
    case RECEIVE_SOURCE_DATA:
      return {  ...state,  data};
    default:
      return state;
  }
};
