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
    this.state = DATA;
    this.saveProperty = this.saveProperty.bind(this);
    this.removeProperty = this.removeProperty.bind(this);
  }

  saveProperty(id) {
    const results = this.state.results;
    const index = results.findIndex(p => p.id === id);
    const [property] = results.splice(index, 1);
    this.setState(prev => ({
      results: results,
      saved: prev.saved.concat(property)
    }))
  }

  removeProperty(id) {
    console.log(this.state.saved);
    
    const saved = this.state.saved;
    const index = saved.findIndex(p => p.id === id);
    const [property] = saved.splice(index, 1);
    this.setState(prev => ({
      saved: saved,
      results: prev.results.concat(property)
    }))
  }

  render() {
    return <div className="app">
    <PropertyGrid properties={this.state.results} handleClick={this.saveProperty} />
    <PropertyGrid properties={this.state.saved} handleClick={this.removeProperty} saved={true}/>
    </div>
  }
}

export default App;
