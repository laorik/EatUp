import axios from "axios";
import * as R from "ramda";

const HERE_API_URL = "https://geocoder.api.here.com/6.2/geocode.json";
const APP_CODE = "XiAH-_8pbmtvUn1IKaHZ2w";
const API_KEY = "69zZHOBAGOl9MV8qbVmG";
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

export const FETCH_EVENTS = "fetch_events";

export function fetchEvents(search) {
  const request = axios
    .get(
      `${HERE_API_URL}?app_id=${API_KEY}&app_code=${APP_CODE}&searchtext=${search}`
    )
    .then(function(response) {
      let lat = R.pathOr(null, [...RESPONSE_RAMDA_PATH, "Latitude"], response);
      let lon = R.pathOr(null, [...RESPONSE_RAMDA_PATH, "Longitude"], response);
      console.log("lat: ", lat);
      console.log("lon: ", lon);
      return axios.get(
        `https://api.meetup.com/find/upcoming_events?key=597535717d26481d695a15d7f2e753f&lat=${lat}&lon=${lon}&sign=true&page=100`
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
