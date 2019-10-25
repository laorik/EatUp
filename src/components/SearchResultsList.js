import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

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

function mapStateToProps({ events, filters }, ownProps) {
  let filterEvents = function() {
    let filteredFreeEvents = _.filter(events, function(event) {
      return (
        event.description &&
        (event.description.toLowerCase().includes("free") ||
          !event.description.includes("$"))
      );
    });

    filteredFreeEvents = _.filter(filteredFreeEvents, function(event) {
      var contains = false;
      for (let i = 0; i < filters.length && !contains; i++) {
        var regex = new RegExp("\\b" + filters[i] + "\\b", "gi");
        contains = regex.test(event.description);
      }

      return filters.length == 0 || contains;
    });

    return filteredFreeEvents.sort((a, b) => (a.time > b.time ? 1 : -1));
  };

  return {
    filteredEvents: filterEvents(),
    filters
  };
}

export default connect(
  mapStateToProps,
  null
)(SearchResultsList);
