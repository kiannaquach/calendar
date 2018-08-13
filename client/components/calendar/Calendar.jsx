import React from 'react';
import moment from 'moment';
import CalendarDayNames from './CalendarDayNames';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      momentDate: moment(),
      selectedDay: moment().startOf('day')
    };

    this.getPrevious = this.getPrevious.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  /******  MONTH & YEAR & PREV/NEXT HEADER ******/
  // get month name/year using moment format method
  getMonthName() {
    return (
      <span className="month-name">
        {this.state.momentDate.format("MMMM")}
        <span> </span>
        <span className="month-year">
          {this.state.momentDate.format("YYYY")}
        </span>
      </span>
    );
  }

  // onClick you get prev month
  // setState to month - 1
  // use moment method subtract to increment month
  getPrevious() {
    this.setState({
      momentDate: this.state.momentDate.subtract(1, 'month')
    });
  }


  // onClick you get next month
  // setState to month - 1
  // use moment method subtract to increment month
  getNext() {
    this.setState({
      momentDate: this.state.momentDate.add(1, 'month')
    });
  }

  render() {
    return (
      <div className="calendar">
          <div className="month row">
            {this.getMonthName()}
            <i className="arrow fa fa-angle-left" onClick={this.getPrevious}/>
            <i className="arrow fa fa-angle-right" onClick={this.getNext}/>
          </div>
          <CalendarDayNames />
      </div>
    );
  }
}

export default Calendar;
