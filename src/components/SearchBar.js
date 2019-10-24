import _ from "lodash";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../actions";

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
    const request = axios.get(
      `https://geocoder.api.here.com/6.2/geocode.json?app_id=69zZHOBAGOl9MV8qbVmG&app_code=XiAH-_8pbmtvUn1IKaHZ2w&searchtext=200%20S%20Mathilda%20Sunnyvale%20CA`
    );

    request.then(response => {
      console.log(response);
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
