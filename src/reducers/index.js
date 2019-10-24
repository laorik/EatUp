import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import EventsReducer from "./reducer-search";
import FiltersReducer from "./filter-reducers"

const rootReducer = combineReducers({
  events: EventsReducer,
  filters: FiltersReducer
});

export default rootReducer;
