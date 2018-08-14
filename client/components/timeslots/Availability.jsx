import React from 'react';
import AvailabilitySelectedDate from './AvailabilitySelectedDate';

class Availability extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
         (this.props.activity.id === this.props.selectedActivity.id) ?
          <AvailabilitySelectedDate
            activity={this.props.activity} 
            selectedActivity={this.props.selectedActivity}
            book={this.props.book}
          />
          :
           ''
        }
      </div>
    );
  }
}


export default Availability;
