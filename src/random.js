var data = [];

var filters = ["beer", "snacks"];

var beerFilter = _.filter(data, function(event) {
  return data.description.includes("beer");
});

var snacksFilter = _.filter(data, function(event) {
  return data.description.includes("snacks");
});

var results = beerFilter.concat(snacksFilter).unique();
