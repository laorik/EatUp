import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import EventsReducer from "./reducer-search";

const rootReducer = combineReducers({
  events: EventsReducer,
  form: formReducer
});

export default rootReducer;
