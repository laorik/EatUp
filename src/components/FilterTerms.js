import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../index.css";
import { toggleFilter, addFilterTerm } from "../actions";

//the default buttons we want to appear on the screen on new launch
export const DEFAULT_FILTERS = ["Snacks", "Food", "Beer", "Drinks"];

class FilterTerms extends Component {
  //prompts user for new term adds it to the custom terms list
  promptAddTerm() {
    var term = prompt("Add a search term:");

    //only accept if not undefined/null/empty
    if (term && term.trim()) {
      this.props.addFilterTerm(term);
    }
  }

  renderTermButton(term) {
    //grey button if currently not filtered, green if so
    return (
      <button
        key={term}
        onClick={() => this.props.toggleFilter(term)}
        className={`${
          this.props.filters.includes(term)
            ? "btn btn-success"
            : "btn btn-secondary"
        }`}
      >
        {term}
      </button>
    );
  }

  //create buttons for each term in array
  renderTerms(arrOfTerms) {
    return _.map(arrOfTerms, filter => {
      return this.renderTermButton(filter);
    });
  }

  render() {
    return (
      <div>
        {this.renderTerms(DEFAULT_FILTERS)}
        {this.renderTerms(this.props.customFilters)}
        <button
          onClick={this.promptAddTerm.bind(this)}
          className="btn btn-success"
        >
          +
        </button>
      </div>
    );
  }
}

function mapStateToProps({ filters, customFilters }, ownProps) {
  return {
    //list of active filters
    filters,
    //list of custom added filters
    customFilters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter, addFilterTerm }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTerms);
