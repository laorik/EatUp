import _ from "lodash";
import { ADD_FILTER_TERM } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FILTER_TERM:
      //clone array into uppercase version, then check for uppercase term
      //we want to preserve the user's casing styling for display
      let upperTerms = _.map(state, term => {
        return term.toUpperCase();
      });

      return !upperTerms.includes(action.payload.toUpperCase())
        ? state.concat(action.payload)
        : state;
    default:
      return state;
  }
}
