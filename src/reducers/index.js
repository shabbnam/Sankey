import ChartReducer from "./ChartReducer";
import { combineReducers } from "redux";
import LanguageReducer from "./LanguageReducer";

export default combineReducers({
  ChartData: ChartReducer,
  lang: LanguageReducer,
});
