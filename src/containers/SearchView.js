import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import FilterTerms from "../components/FilterTerms";
import SearchResultsList from "../components/SearchResultsList";

class SearchView extends Component {
  render() {
    return (
      <div className="search-view">
        <SearchBar />
        <FilterTerms />
        <SearchResultsList />
      </div>
    );
  }
}

export default SearchView;
