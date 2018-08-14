import React from 'react';
import TimeSlot from './TimeSlot';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  customWidth: {
    maxWidth: 58,
  }
});


class TimeSlots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedActivity: '',
      selected: false
    };

  }

  bookSelectedActivity(activity) {
    // console.log('you clicked');
    this.setState ({
      selectedActivity: activity,
      selected: !this.state.selected
    });
  }


  render() {
    return (
        <div>
          <Tooltip 
            title={this.props.activity.availableSpots + 
            " spots left        " + 
            " click for info"} 
            classes={{ tooltip: this.props.classes.customWidth }}
            placement="top-end">
            
            <div className="timeslot" 
              onClick={() => this.bookSelectedActivity(this.props.activity)}>

              {this.props.activity.activityName}
              <br />
              {this.props.activity.start} - 
              {this.props.activity.end}
              
            </div>
          </Tooltip>

        <div className="timeslot-info">
          {

            (!this.state.selected) ? 
            <div></div> 
            :
            <TimeSlot 
              selectedActivity={this.state.selectedActivity} 
              clickBook={this.props.clickBook.bind(this)}/>

          }
        </div> 
      </div>
    );
  }
}


export default withStyles(styles)(TimeSlots);
