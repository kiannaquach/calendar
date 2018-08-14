import React from 'react';
import Calendar from './components/calendar/Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="container">
            <li>
              ADVENTURES
              <div style={{fontSize: '10pt'}}>find your new adventure and have fun!</div>
            </li>
          </ul>
        </nav>

        <Calendar />

          <ul className="container footer">
            <a 
            className="footer-hyperlink"
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://kiannaquach.com" 
            >

              Kianna✌🏻
            </a>

            <a 
            className="footer-hyperlink-github"
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/kiannaquach" 
            >
              <i className="fab fa-github-alt fa-sm">
              </i>
            </a>
          </ul>
      </div>
    );
  }
}

export default App;