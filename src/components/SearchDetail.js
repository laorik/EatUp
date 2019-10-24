import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { bindActionCreators } from "redux";
import moment from "moment";

class SearchDetail extends Component {
  render() {
    const { event } = this.props;

    if (!event) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Events Page</Link>
        <h3>
          <a href={event.link} target="_blank">
            {event.name}
          </a>
        </h3>
        <h5>
          Date: {moment(event.local_date).format("MMMM Do YYYY")} Time:{" "}
          {moment(event.local_time, "HH:mm:ss").format("h:mm:ss A")}
        </h5>
        <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { event: state.events.find(e => e.id === ownProps.match.params.id) };
}

export default connect(
  mapStateToProps,
  null
)(SearchDetail);
