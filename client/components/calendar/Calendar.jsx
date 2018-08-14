import React from 'react';
import moment from 'moment';
import axios from 'axios';
import CalendarDayNames from './CalendarDayNames';
import CalendarWeek from './CalendarWeek';
import SelectedDate from './SelectedDate';
import Availability from '../timeslots/Availability';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      momentDate: moment(),
      selectedDay: moment().startOf('day'),
      book: false,
      activities: [],
      selectedActivity: {}
    };

    this.getPrevious = this.getPrevious.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getSelectedDateActivity = this.getSelectedDateActivity.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
  }

  componentDidMount() {
    axios.get('/activityInfo')
    .then((res) => {
      this.setState ({
        activities: [...res.data]
      });
    });

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

  clickBook(activity) {
    console.log('you clicked book');
    this.setState({
      book: true,
      selectedActivity: activity
    });
  }

  getSelectedDateActivity() {
    return this.state.activities.map((activity) => {
      return (
        <div>
          <SelectedDate 
            activity={activity}
            selectedDate={this.state.selectedDay} 
            clickBook={this.clickBook.bind(this)} 
            book={this.state.book}
          />
        </div>
      );
    });
  }

  getAvailability() {
    if (!this.state.book) {
      return '';
    } else {
      return this.state.activities.map((activity) => {
        return (
          <div>
            <Availability 
              activity={activity}
              selectedActivity={this.state.selectedActivity}
              book={this.state.book}
            />
          </div>
        );
      });
    }
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

          <div className="column">
            {
              this.getSelectedDateActivity()
            }
          </div>

          <div className="column">
            {
              this.getAvailability()
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Calendar;

