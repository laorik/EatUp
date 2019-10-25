import _ from "lodash";
import { FETCH_EVENTS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log("MEETUP Api response", action.payload);
      if (action.payload) {
        return action.payload.data.events.slice(0);
      }
      return state;
    default:
      return state;
  }
}
