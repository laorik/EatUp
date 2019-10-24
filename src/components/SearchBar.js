import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <button
          type="submit"
          onClick={this.props.fetchEvents}
          className="btn btn-primary"
        >
          Get Free Food
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
