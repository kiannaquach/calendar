import React from 'react';
import moment from 'moment';

class CalendarDayNames extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selectedDay: moment().startOf('day')
    };
  }


  render() {
    console.log(this.state.month);
    return (
      <div className="row day-names">
        <span className="day-names-span">Sun </span>
        <span className="day-names-span">Mon </span>
        <span className="day-names-span">Tue </span>
        <span className="day-names-span">Wed </span>
        <span className="day-names-span">Thu </span>
        <span className="day-names-span">Fri </span>
        <span className="day-names-span">Sat </span>
      </div>
    );
  }
}

export default CalendarDayNames;
