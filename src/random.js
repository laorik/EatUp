var data = [];

var filters = ["beer", "snacks"];

var beerFilter = _.filter(data, function(event) {
  return data.description.includes("beer");
});

var snacksFilter = _.filter(data, function(event) {
  return data.description.includes("snacks");
});

var results = beerFilter.concat(snacksFilter).unique();

let initState = {};
const persistedState = localStorage.getItem("reduxState");
if (persistedState) {
  initState = JSON.parse(persistedState);
}
let store = createStore(reducers, initState, applyMiddleware(promise));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
