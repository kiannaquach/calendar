import React from 'react';

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0
    };
  }

  clicked(day) {
    this.setState({
      selectedDate: day
    });

    this.props.select(day);
  }

  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected,
      avail
    } = this.props;


    return (
        <span 
          key={date.toString()} 
          style={{flex: 1, textAlign: 'center', fontWeight: 100}}
          className={
            "day" + (isToday ? " today" : "") 
            + (isCurrentMonth ? "" : " different-month") 
            + (date.isSame(selected) ? " selected" : "")
          }
          onClick={()=> select(day)}
        >

          {number}

        </span>
    );
  }
}

// if key === peekDate {
//   display more info 

// }


export default CalendarDay;
