import { combineReducers } from "redux";

import newsList from "./newsRed";
import sourceList from "./sourceRed";
import  popularMoviesRed  from "./popularMoviesRed";

export default combineReducers({
  newsList,
  sourceList,
  popularMoviesRed
});
