import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import CalendarDayNames from './CalendarDayNames';
import CalendarWeek from './CalendarWeek';
import SelectedDate from './SelectedDate';
import Availability from '../timeslots/Availability';
import Form from '../signup/Forms';
import FormCompletedMessage from '../signup/FormCompletedMessage';


class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      momentDate: moment(),
      selectedDay: moment().startOf('day'),
      book: false,
      activities: [],
      selectedActivity: {},
      quotes: {},
      display: ''
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

    axios.get('https://quotes.rest/qod?category=inspire')
    .then((res) => {
      // console.log('res data', res.data.contents.quotes[0])
        this.setState ({
          quotes: res.data.contents.quotes[0]
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
          <span>  </span>
          📆
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

  // when day is selected change the state to current day selected
  select(day) {
    this.setState({
      selectedDay: day.date,
      momentDate: day.date.clone(),
    });
  }
  
  // get weeks 
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


  // book activity from the timeslots
  clickBook(activity) {
    // console.log('you clicked book');
    this.setState({
      book: true,
      selectedActivity: activity
    });
  }
  
  // choose selected date
  getSelectedDateActivity() {
    return this.state.activities.map((activity, i) => {
      return (
        <div key={i}>
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

  /********* GET AVAILABILITY AND BOOK (3RD COLUMN) **********/
  // check to see if date this avaiable and book
  getAvailability() {
    if (!this.state.book) {
      return '';
    } else {
      return this.state.activities.map((activity, i) => {
        return (
          <div key={i}>
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


  /********* FORM ACTIONS FOR SIGN UP EVENT **********/
  // form actions
  submitForm() {
    this.setState ({
      display: 'none'
    });
  }

  restartForm() {
    this.setState ({
      display: ''
    });
  }


  render() {
    return (
      <div className="wrapper">
        <div className="columns">

          <div className="calendar column">
              <div className="month row">
                {this.getMonthName()}

                <Tooltip title='back' placement="bottom">
                  <i 
                    className="arrow fa fa-angle-left" 
                    onClick={this.getPrevious}/>
                </Tooltip>

                <Tooltip title='next' placement="bottom">
                  <i 
                    className="arrow fa fa-angle-right" 
                    onClick={this.getNext}/>
                </Tooltip>

              </div>

              <CalendarDayNames />

                {this.renderWeeks()}

              <div className="row quote">
                {this.state.quotes.quote}--{this.state.quotes.author}
              </div>
          </div>

          <div className="column">
            <div>
            
              <span className="activities-title">
                What do 
                <span> </span>
                <span style={{fontWeight: 400, fontSize: '20pt'}}>you</span>
                <span> </span>
                want to do? 🏄‍♀️🚴‍♂️
              </span>

            </div>
            {
              this.getSelectedDateActivity()
            }
          </div>

          <div className="column">
            {
              (this.state.display === 'none') ?  

                <FormCompletedMessage 
                  restartForm={this.restartForm.bind(this)}
                  selectedActivity={this.state.selectedActivity}
                  />
                
                : 
                <div style={{display: this.state.display}}>
                  <div>

                    <span className="activities-title">

                      <span 
                        style={{fontWeight: 400, fontSize: '20pt'}}>
                        Book
                      </span><span> </span><span>now  👉</span>

                    </span>

                  </div>

                  <br />
                  
                  <Form />

                  {this.getAvailability()}

                  <br />

                  <div>
                  <button 
                    className="btn submit" 
                    onClick={() => this.submitForm()}>
                    submit
                  </button>
                  </div>

                </div>
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Calendar;

