import React from 'react';
import data from '../../data/exampleTimeSlotData.json';

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
      <div className="middle-grid">
      {
        data.timeslots.map((timeSlot) => {
          return (
            <div className="timeslot" onClick={() => this.bookActivityInfo()} key={timeSlot.id}>
              <div>{timeSlot.activity_name}</div>
              <div>start: {timeSlot.start.slice(11)}</div>
              <div>end: {timeSlot.end.slice(11)}</div>
              <br />
            </div>
          );
        })
      }
      </div>
    );
  }
}


export default TimeSlots;
