import _ from "lodash";
import React, { Component } from "react";

class SearchResultsList extends Component {
  render() {
    return <div className="search-results-list">SearchResultsList</div>;
  }
}
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}
export default SearchResultsList;
