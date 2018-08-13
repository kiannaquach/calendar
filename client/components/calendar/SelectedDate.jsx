import React from 'react';
import data from '../../data/exampleTimeSlotData.json';
import TimeSlots from '../timeslots/TimeSlots';

class SelectedDate extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
       {

        !(this.props.selectedDate.format().slice(0, 10) === data.timeslots[0].start.slice(0,10)) 
        ? 
        ""
        : 
          <TimeSlots />        
        }
      </div>
    );
  }
}


export default SelectedDate;
