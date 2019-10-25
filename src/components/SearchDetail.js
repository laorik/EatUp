import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        <h5 style={{ color: 'yellow' }}>
          Date: {moment(event.local_date).format("MMMM Do YYYY")} Time:{" "}
          {moment(event.local_time, "HH:mm:ss").format("h:mm A")}
        </h5>
        {/* doing this so that html from meetup is rendered nicely */}
        <div className="description" style={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: event.description }}></div>
      </div>
    );
  }
}

//set event to the id that matches the url
function mapStateToProps(state, ownProps) {
  return { event: state.events.find(e => e.id === ownProps.match.params.id) };
}

export default connect(
  mapStateToProps,
  null
)(SearchDetail);
