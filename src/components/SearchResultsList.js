import _ from "lodash";
import React, {Component} from 'react';
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

class SearchResultsList extends Component {
  render() {
    return (
      <div className="search-results-list">
        Search Results List
        {this.renderEvents()}
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
        contains = event.description
          .toLowerCase()
          .includes(filters[i].toLowerCase());
      }

      return filters.length == 0 || contains;
    });

    return filteredFreeEvents.sort((a,b)=>(a.time>b.time)?1:-1);
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
