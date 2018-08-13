import React from 'react';

class TimeSlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('not selected', this.props.timeSlot.id === this.props.selectActivity.id)
    return (
      <div className="last-grid grid__wrapper">
        <div>{this.props.selectedActivity.id}</div>
        <div>{this.props.selectedActivity.max_guests}</div>
        <div>{this.props.selectedActivity.minute_length}</div>
        <div>{this.props.selectedActivity.available_spots}</div>
      </div>
    );
  }
}


export default TimeSlot;
