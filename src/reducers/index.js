import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import EventsReducer from "./reducer-search";
import FiltersReducer from "./filter-reducers";
import LoadingReducer from "./loading-reducers";
import CustomFilterReducer from "./custom-filter-reducers";

const rootReducer = combineReducers({
  events: EventsReducer,
  form: formReducer,
  filters: FiltersReducer,
  customFilters: CustomFilterReducer,
  isLoading: LoadingReducer
});

export default rootReducer;
