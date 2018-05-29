import React, {
  Component
} from 'react';
import './reset.css';
import './App.css';

import DATA from "../../data.json"
import PropertyGrid from "../PropertyGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.properties = DATA.results;
    this.saved = DATA.saved;
  }

  render() {
    return <div>
    <PropertyGrid properties={this.properties}/>
    <PropertyGrid properties={this.saved}/>
    </div>
  }
}

export default App;
