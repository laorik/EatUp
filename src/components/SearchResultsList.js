import React, {Component} from "react"
import _ from "lodash";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

class SearchResultsList extends Component {
  render() {
    console.log("Events:", this.props.filteredEvents);
    return <div className="search-results-list">
      Search Results List
      { this.renderEvents() }
            </div>;

  }

  renderEvents() {
    return  _.map(this.props.filteredEvents, event => {
      return (
        <SearchResult key= {event.id} event= {event}/>
      );
    });
  }
}


function mapStateToProps({ events, filters }, ownProps) {
  let filterEvents = function() {
    return events;
  };

  return {
    filteredEvents: filterEvents()
  };
}

export default connect(
  mapStateToProps,
  null
)(SearchResultsList);
