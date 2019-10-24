import _ from "lodash";
import { connect } from "react-redux";

class SearchResultsList extends Component {
  render() {
    console.log("Events:", this.props.filteredEvents);
    return <div className="search-results-list">SearchResultsList</div>;
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
