import React from 'react';

class TimeSlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('not selected', this.props.timeSlot.id === this.props.selectActivity.id)
    return (
      <div className="last-grid grid__wrapper" onClick={() => this.props.clickBook()}>
        <div>{this.props.selectedActivity.id}</div>
        <div>{this.props.selectedActivity.maxGuests}</div>
        <div>{this.props.selectedActivity.minuteLength}</div>
        <div>{this.props.selectedActivity.availableSpots}</div>
        <button>book</button>
      </div>
    );
  }
}


export default TimeSlot;
