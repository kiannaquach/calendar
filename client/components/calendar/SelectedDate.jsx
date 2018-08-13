import React from 'react';
import data from '../../data/exampleTimeSlotData.json';
import TimeSlots from '../timeslots/TimeSlots';
import axios from 'axios';

class SelectedDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    axios.get('/activityInfo')
    .then((res) => {
      this.setState ({
        activities: [...res.data]
      });
    });

  }


  render() {
    return (
      <div>
       {
        this.state.activities.map((activity) => {
          if (this.props.selectedDate.format("YYYY-MM-DD") === activity.date) {
            return (
              <TimeSlots activity={activity} clickBook={this.props.clickBook.bind(this)}/>
            );
          } else {
            return '';
          }
        })

        }
      </div>
    );
  }
}


export default SelectedDate;
