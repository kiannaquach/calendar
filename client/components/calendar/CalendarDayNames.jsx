import React from 'react';

class CalendarDayNames extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
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
