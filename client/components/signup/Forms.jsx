import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <div className="form">      
            <input type="text" placeholder="Name" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>
            
          <div className="form">      
            <input type="text" placeholder="Email" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
    
      </div>
    );
  }
}


export default Form;
