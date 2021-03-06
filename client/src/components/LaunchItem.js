import React from 'react';
import classNames from 'classnames';

const LaunchItem = ({ launch: {
  flight_number,
  mission_name,
  launch_date_local,
  launch_success
}}) => {
  return(
    <div className="card card-body mb-3">
      <div className="col-md-9">
        <h4>Mission: <span className={classNames({
          'text-success': launch_success,
          'text-danger': !launch_success
        })}>{mission_name}</span></h4>
        <p>Date: {launch_date_local}</p>
      </div>
      <div className="col-md-3">
        <button className="btn btn-secondary">Details</button>
      </div>
    </div>
  )
}

export default LaunchItem;