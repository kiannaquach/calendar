import React from 'react';

class TimeSlot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('not selected', this.props.timeSlot.id === this.props.selectActivity.id)
    return (
      <div className="last-grid grid__wrapper">
        <div className="activity-info">{this.props.selectedActivity.activityInfo}</div>
        <br />
        <div className="activity-info">Total time: {this.props.selectedActivity.minuteLength}mins</div>
        <div className="activity-info">Available Spots: {this.props.selectedActivity.availableSpots}</div>
        <button className="btn" onClick={() => this.props.clickBook(this.props.selectedActivity)}>book</button>
      </div>
    );
  }
}


export default TimeSlot;
