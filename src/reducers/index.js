import { combineReducers } from "redux";

import newsList from "./newsRed";
import sourceList from "./sourceRed";
import  popularMoviesRed  from "./popularMoviesRed";
import movDetRed  from "./movDetRed";
import filterRed  from "./filterRed";
import searchRed  from "./searchRed";
import similarMov  from "./similarMov";

export default combineReducers({
  newsList,
  sourceList,
  popularMoviesRed,
  movDetRed,
  filterRed,
  searchRed,
  similarMov
});