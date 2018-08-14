import React from 'react';
import TimeSlots from '../timeslots/TimeSlots';

class SelectedDate extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    // console.log('date', this.props.activity.date);
    return (
      <div>
       {
         (this.props.selectedDate.format("YYYY-MM-DD") === this.props.activity.date) ?
          <TimeSlots activity={this.props.activity} clickBook={this.props.clickBook.bind(this)} book={this.props.book}/>
          :
           ''
        }
      </div>
    );
  }
}


export default SelectedDate;

