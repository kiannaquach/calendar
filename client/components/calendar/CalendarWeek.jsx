import React from 'react';

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
        <span 
        key={date.toString()} 
        style={{flex: 1, textAlign: 'center', fontWeight: 100}}
        className={
          "day" + (day.isToday ? " today" : "") 
          + (day.isCurrentMonth ? "" : " different-month") 
          + (date.isSame(this.props.selected) ? " selected" : "")
        }
        onClick={()=> this.props.select(day)}
        >

        {day.number}

        </span>
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
