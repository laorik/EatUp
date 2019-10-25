import React from 'react';
import moment from "moment";
import {Link} from 'react-router-dom';

const SearchResult = props => {
    return (
        <li className="list-group-item" key={props.event.id}>
            <Link to={`/event/${props.event.id}`}>
            {props.event.name}</Link><br></br>
            Date: {moment(props.event.local_date).format('MMMM Do YYYY')}<br></br>
            Time: {moment(props.event.local_time,'HH:mm:ss').format('h:mm A')}
            
        </li>
    )
}

export default SearchResult