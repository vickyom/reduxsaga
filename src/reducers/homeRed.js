import { RECEIVE_HOME_DATA,RECEIVE_PERSON_DATA,RECEIVE_TV_DATA } from "../actionType";

export default (state = {homeList:[],tvList:[],personList:[]}, {type,data }) => {
  switch (type) {
    case RECEIVE_HOME_DATA:
      return {  ...state, homeList: data.results};
    case RECEIVE_PERSON_DATA:
      return {  ...state, personList: data.results};
    case RECEIVE_TV_DATA:
      return {  ...state, tvList: data.results};
    default:
      return state;
  }
};
