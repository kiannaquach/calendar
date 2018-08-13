import React from 'react';
import moment from 'moment';
import CalendarDayNames from './CalendarDayNames';
import CalendarWeek from './CalendarWeek';
import SelectedDate from './SelectedDate';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      momentDate: moment(),
      selectedDay: moment().startOf('day'),
      book: false
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

/******  SELECTED DAY & WEEKS ******/

  select(day) {
    this.setState({
      selectedDay: day.date,
      momentDate: day.date.clone(),
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.momentDate.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();


    while (!done) {
      weeks.push(
        <CalendarWeek key={date} 
          date={date.clone()} 
          month={this.state.momentDate} 
          select={(day)=>this.select(day)} 
          selected={this.state.selectedDay} 
          />
      );

      date.add(1, "w");

      count++;

      done = count > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  clickBook() {
    console.log('you clicked book');
    this.setState({
      book: true
    });
  }


  render() {
    return (
      <div className="wrapper">
        <div className="columns">
          <div className="calendar column">
              <div className="month row">
                {this.getMonthName()}
                <i className="arrow fa fa-angle-left" onClick={this.getPrevious}/>
                <i className="arrow fa fa-angle-right" onClick={this.getNext}/>
              </div>
              <CalendarDayNames />
              {this.renderWeeks()}
          </div>
          <SelectedDate 
            selectedDate={this.state.selectedDay} 
            clickBook={this.clickBook.bind(this)} 
          />

          <div>
            {!this.state.book ? '' : <div className="column">YOU BOOKED!</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

