import React, {
  Component
} from 'react';
import './App.css';

import DATA from "../../data.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.properties = DATA.results;
    this.saved = DATA.saved;
  }

  render() {
    return <div>
      <p>properties length: {this.properties.length}</p>
      <p>saved length: {this.saved.length}</p>
    </div>
  }
}

export default App;
