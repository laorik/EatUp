import _ from "lodash";
import { IS_LOADING, FETCH_EVENTS } from "../actions";

export default function(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      console.log("is loading");
      return true;
    case FETCH_EVENTS:
      console.log("done loading");
      return false;
    default:
      return state;
  }
}
