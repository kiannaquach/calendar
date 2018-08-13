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
        <div className="middle-grid grid__wrapper">
        {
          data.timeslots.map((timeSlot) => {
            return (
              <div>
                <div className="timeslot" key={timeSlot.id} onClick={() => this.bookSelectedActivity(timeSlot)}>
                  <div>{timeSlot.activity_name}</div>
                  <div>start: {timeSlot.start.slice(11)}</div>
                  <div>end: {timeSlot.end.slice(11)}</div>
                  <br />
                </div>
              </div>
            );
          })
        }
        </div>

        <TimeSlot selectedActivity={this.state.selectedActivity} />

      </div>
    );
  }
}


export default TimeSlots;
