import React from 'react';
import data from '../../data/exampleTimeSlotData.json';
import TimeSlot from './TimeSlot';

class TimeSlots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActivity: ''
    };

  }


  bookSelectedActivity(activity) {
    // console.log('you clicked');
    this.setState ({
      selectedActivity: activity
    });
  }



  render() {
    return (
      <div className="grid">
        <div className="middle-grid">
          <div style={{marginBottom: '10px'}} className="timeslot" onClick={() => this.bookSelectedActivity(this.props.activity)}>
            {this.props.activity.activityName}
            <br />
            {this.props.activity.start} - 
            {this.props.activity.end}
          </div>
        </div>

        <div>
          <TimeSlot selectedActivity={this.state.selectedActivity} />
        </div> 
      </div>
    );
  }
}


export default TimeSlots;


{/* <div className="grid">
<div className="middle-grid grid__wrapper">
  <div className="timeslot" key={this.props.activity.id} onClick={() => this.bookSelectedActivity(this.props.activity)}>
    <div>{this.props.activity.activityName}</div>
    <div>start: {this.props.activity.start}</div>
    <div>end: {this.props.activity.end}</div>
    <br />
  </div>
</div>
</div>

<div>
<TimeSlot selectedActivity={this.state.selectedActivity} />
</div> */}