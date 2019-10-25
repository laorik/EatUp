import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { fetchEvents, setIsLoading } from "../actions";
import Spinner from "react-bootstrap/Spinner";

class SearchBar extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `input-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input
          placeholder="Location"
          className="form-control"
          type="text"
          {...field.input}
        />
        <span class="input-group-btn">
          <button
            type="submit"
            className="btn btn-primary submit-btn glyphicon glyphicon-refresh spinning"
          >
            {field.isLoading ? (
              <Spinner animation="border" role="status" size="sm" />
            ) : (
              "Submit"
            )}
          </button>
        </span>
        {/*<div className="text-help">{touched ? error : ""}</div>*/}
      </div>
    );
  }

  onSubmit(values) {
    this.props.setIsLoading();
    this.props.fetchEvents(values.title);
  }

  render() {
    const { handleSubmit, isLoading } = this.props;
    return (
      <div className="search-bar">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            isLoading={isLoading}
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, setIsLoading }, dispatch);
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a location";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

//set event to the id that matches the url
function mapStateToProps({ isLoading }, ownProps) {
  return {
    isLoading
  };
}

const postNewPost = reduxForm({
  validate: validate,
  form: "postNew"
})(SearchBar);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postNewPost);
