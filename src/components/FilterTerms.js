import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleFilter } from "../actions"
import "../index.css";

class FilterTerms extends Component {
  render() {
    console.log(this.props.filters)

    const snacksButtonClass = `${this.props.filters.includes('snacks') ? 'btn btn-success': 'btn btn-secondary'}`
    const foodButtonClass = `${this.props.filters.includes('food') ? 'btn btn-success': 'btn btn-secondary'}`
    const beerButtonClass = `${this.props.filters.includes('beer') ? 'btn btn-success': 'btn btn-secondary'}`
    const drinksButtonClass = `${this.props.filters.includes('drinks') ? 'btn btn-success': 'btn btn-secondary'}`

    return (
      <div className='toggles'>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.toggleFilter('snacks')} type="button-snacks" className= {snacksButtonClass} data-toggle="button" aria-pressed="false" autocomplete="off">
          Snacks</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.toggleFilter('food')} type="button-food" className= {foodButtonClass} data-toggle="button" aria-pressed="false" autocomplete="off">
          Food</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.toggleFilter('beer')} type="button-beer" className= {beerButtonClass} data-toggle="button" aria-pressed="false" autocomplete="off">
          Beer</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => this.props.toggleFilter('drinks')} type="button-drinks" className= {drinksButtonClass} data-toggle="button" aria-pressed="false" autocomplete="off">
          Drinks</button> &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    )
  }
}  
function mapStateToProps({ filters }, ownProps) {
  return {
    filters: filters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTerms);