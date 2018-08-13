import React from 'react';
import data from '../../data/exampleTimeSlotData.json';
import TimeSlot from './TimeSlot';

class TimeSlots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActivity: '',
      selected: false
    };

  }


  bookSelectedActivity(activity) {
    // console.log('you clicked');
    this.setState ({
      selectedActivity: activity,
      selected: !this.state.selected
    });
  }



  render() {
    return (
      <div>
        <div className="column">
          <div className="timeslot" onClick={() => this.bookSelectedActivity(this.props.activity)}>
            {this.props.activity.activityName}
            <br />
            {this.props.activity.start} - 
            {this.props.activity.end}
          </div>
        </div>

        <div className="column">
          {(!this.state.selected) ? <div></div> :
          <TimeSlot selectedActivity={this.state.selectedActivity} clickBook={this.props.clickBook.bind(this)}/> }
        </div> 
      </div>
    );
  }
}


export default TimeSlots;
