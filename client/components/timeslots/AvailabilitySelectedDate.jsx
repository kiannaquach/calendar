import React from 'react';

class AvailabilitySelectedDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      color: '',
      price: this.props.selectedActivity.price
    }
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });

    if (this.props.selectedActivity.availableSpots === this.state.count) {
      this.setState({
        color: 'red',
        count: this.state.count
      });
    } 
  }

  subtractCount() {
    this.setState({
      count: this.state.count - 1
    });

    if (this.state.count <= 0) {
      this.setState({
        count: 0
      });
    } else if (this.state.count <= this.props.selectedActivity.availableSpots) {
      this.setState ({
        color: 'black'
      });
    }
  }

  render() {
    return (
      <div>

         <div className="timeslot-info">
          {
            (!this.props.book) ? <div></div> :
            <div> 
              <div>{this.props.selectedActivity.activityName}</div>
                <i 
                  className="fas fa-minus-circle fa-1x" 
                  style={{color: 'lightBlue'}} 
                  onClick={() => this.subtractCount()}/>

                  <input type="text" 
                    style={{width: '25px', color:`${this.state.color}`}} 
                    value={this.state.count} />  

                <i className="fas fa-plus-circle fa-1x" 
                  style={{color: 'lightBlue'}} 
                  onClick={() => this.addCount()} />
                  <span style={{marginLeft: '25px'}}>Guests</span>
            </div>
          }



        </div> 

      </div>
    );
  }
}


export default AvailabilitySelectedDate;

// for prices

{/* <div>
  <input type="text" 
          style={{width: '66px'}} 
          value={this.state.price} /> 
  <span style={{marginLeft: '5px'}}>
    Price
  </span> 
</div> */}