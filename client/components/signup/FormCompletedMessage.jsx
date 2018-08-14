import React from 'react';

class FormCompletedMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: '30px', fontWeight: 100}}>

        Thanks for booking <span> </span>
        <span style={{fontWeight: 400}}>
          {this.props.selectedActivity.activityName}!
        </span>
        <br />
        <br />
        Enjoy the little things in life, for one day you may look back and realize 
        they were the big things.
        ~Robert Breault 


        <br />
        <br />
        Enjoy your next adventure. Have a wonderful day ☀️

        <button 
          className="btn submit" 
          style={{marginTop: '50px'}}
          onClick={() => this.props.restartForm()}>
          book again
        </button>
      </div> 
    );
  }
}


export default FormCompletedMessage;
