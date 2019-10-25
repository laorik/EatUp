import axios from "axios";
import * as R from "ramda";

const HERE_API_URL = "https://geocoder.api.here.com/6.2/geocode.json";
const HERE_APP_CODE = "XiAH-_8pbmtvUn1IKaHZ2w";
const HERE_API_KEY = "69zZHOBAGOl9MV8qbVmG";

const CORS_HEROKU = "https://cors-anywhere.herokuapp.com/";
const MEETUP_API_URL = "https://api.meetup.com/find/upcoming_events";
const MEETUP_API_KEY = "597535717d26481d695a15d7f2e753f";

//ramda object path to lat/lon cordinates
const RESPONSE_RAMDA_PATH = [
  "data",
  "Response",
  "View",
  0,
  "Result",
  0,
  "Location",
  "DisplayPosition"
];

export const TOGGLE_FILTER = "toggle_filter";
export const FETCH_EVENTS = "fetch_events";
export const ADD_FILTER_TERM = "add_term";

export function fetchEvents(search) {
  //start and axios request to HERE maps, then with that response (which translates address into lat/lon)
  //request from Meetup upcoming events using the lat/lon
  const request = axios
    .get(
      `${CORS_HEROKU}${HERE_API_URL}?app_id=${HERE_API_KEY}&app_code=${HERE_APP_CODE}&searchtext=${search}`
    )
    .then(function(response) {
      console.log("HERE Api response", response);
      let lat = R.pathOr(null, [...RESPONSE_RAMDA_PATH, "Latitude"], response);
      let lon = R.pathOr(null, [...RESPONSE_RAMDA_PATH, "Longitude"], response);
      return axios.get(
        `${MEETUP_API_URL}?key=${MEETUP_API_KEY}&lat=${lat}&lon=${lon}&sign=true&page=250`
      );
    })
    .catch(function(error) {
      console.log("HERE ERROR: ", error);
    });

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

//toggle a filters state
export function toggleFilter(filter) {
  return {
    type: TOGGLE_FILTER,
    payload: filter
  };
}

//add a custom filter term
export function addFilterTerm(filter) {
  return {
    type: ADD_FILTER_TERM,
    payload: filter
  };
}
