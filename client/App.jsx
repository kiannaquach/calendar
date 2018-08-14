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
          <ul class="container">
            <li>SERENDIPITY</li>
          </ul>
        </nav>

        <Calendar />

          <ul class="container footer">
            <a>Kianna✌🏻</a>
          </ul>
      </div>
    );
  }
}

export default App;