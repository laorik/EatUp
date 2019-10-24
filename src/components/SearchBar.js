import _ from "lodash";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions";
import * as R from "ramda";

const HERE_API_URL = "https://geocoder.api.here.com/6.2/geocode.json";
const APP_CODE = "XiAH-_8pbmtvUn1IKaHZ2w";
const API_KEY = "69zZHOBAGOl9MV8qbVmG";
const RESPONSE_RAMDA_PATH = [
  "data",
  "Response",
  "View",
  0,
  "Result",
  0,
  "Location",
  "DisplayPosition"
];

class SearchBar extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    {
      /* going to do this ugly for now and do an axios request and then action of it's response 
        other middlewares look promising but we don't have time right now*/
    }

    const request = axios
      .get(
        `${HERE_API_URL}?app_id=${API_KEY}&app_code=${APP_CODE}&searchtext=${values.title}`
      )
      .then(function(response) {
        let lat = R.pathOr(
          null,
          [...RESPONSE_RAMDA_PATH, "Latitude"],
          response
        );
        let lon = R.pathOr(
          null,
          [...RESPONSE_RAMDA_PATH, "Longitude"],
          response
        );
        console.log("lat: ", lat);
        console.log("lon: ", lon);
      })
      .catch(function(error) {
        console.log("HERE ERROR: ", error);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="search-bar">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Location" name="title" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

const postNewPost = reduxForm({
  validate: validate,
  form: "postNew"
})(SearchBar);

export default connect(
  null,
  mapDispatchToProps
)(postNewPost);
