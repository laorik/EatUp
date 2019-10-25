import _ from "lodash";
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import FilterTerms from "../components/FilterTerms";
import SearchResultsList from "../components/SearchResultsList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchView extends Component {
  render() {
    return (
      <div className="search-view">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <SearchBar />
              <FilterTerms />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <SearchResultsList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchView;
