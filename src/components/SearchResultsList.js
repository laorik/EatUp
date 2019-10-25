import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import { DEFAULT_FILTERS } from "./FilterTerms";

class SearchResultsList extends Component {
  render() {
    return (
      <div>
        {this.props.filteredEvents.length > 0 ? (
          <h1 style={{ color: "green" }} className="search-header">
            Free food below...
          </h1>
        ) : (
          ""
        )}
        <div className="search-results-list">{this.renderEvents()}</div>
      </div>
    );
  }

  renderEvents() {
    return _.map(this.props.filteredEvents, event => {
      return <SearchResult key={event.id} event={event} />;
    });
  }
}

function mapStateToProps({ events, filters, customFilters }, ownProps) {
  let filterEvents = function() {
    let filteredFreeEvents = _.filter(events, function(event) {
      return (
        event.description &&
        (event.description.toLowerCase().includes("free") ||
          !event.description.includes("$"))
      );
    });

    let filtersList = [];

    if (filters.length > 0) {
      filtersList = filters;
    } else {
      console.log(DEFAULT_FILTERS);
      filtersList = filtersList.concat(DEFAULT_FILTERS);
      filtersList = filtersList.concat(customFilters);
    }

    filteredFreeEvents = _.filter(filteredFreeEvents, function(event) {
      var contains = false;
      for (let i = 0; i < filtersList.length && !contains; i++) {
        var regex = new RegExp("\\b" + filtersList[i] + "\\b", "gi");
        contains = regex.test(event.description);
      }

      return filtersList == 0 || contains;
    });

    return filteredFreeEvents.sort((a, b) => (a.time > b.time ? 1 : -1));
  };

  return {
    filteredEvents: filterEvents(),
    filters,
    customFilters
  };
}

export default connect(
  mapStateToProps,
  null
)(SearchResultsList);
