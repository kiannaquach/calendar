import React from 'react';
import CalendarDay from './CalendarDay';

class CalendarWeek extends React.Component {
  render() {
    let days = [];

    let {
      date,
    } = this.props;
    

    // one week is 7 days
    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === this.props.month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
    
      days.push(
        <CalendarDay day={day}
          selected={this.props.selected}
          select={this.props.select}
          />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  }

}
export default CalendarWeek;
