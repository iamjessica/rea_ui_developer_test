import React, {
  Component
} from 'react';
import './App.css';

import DATA from "../../data.json"
import PropertyGrid from "../PropertyGrid";

/**
 * Main app component
 */
class App extends Component {
  constructor(props) {
    super(props);
    /** The state of the component is the data from the arrays in our data.json file */
    this.state = DATA;
    /** Binding our functions to the component */
    this.saveProperty = this.saveProperty.bind(this);
    this.removeProperty = this.removeProperty.bind(this);
  }

  /** 
   * finds the index of the property, removes it from the results 
   * array and concatinates it to the existing saved array in the state, 
   * re-renders
   */
  saveProperty(id) {
    const results = this.state.results;
    const index = results.findIndex(p => p.id === id);
    const [property] = results.splice(index, 1);
    this.setState(prev => ({
      results: results,
      saved: prev.saved.concat(property)
    }))
  }

  /** 
   * finds the index of the property, removes it from the saved 
   * array and concatinates it to the existing results array in the state, 
   * re-renders
   */  
  removeProperty(id) {
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
      <div className="search-results">
        <h3>Search Results</h3>
        {/**Results array component, handleClick with saveProperty function assigned*/}
        <PropertyGrid properties={this.state.results} handleClick={this.saveProperty}  className="results"/>
      </div>
      <aside>
        <h3>Saved Properties</h3>
        {/**Saved array component, handleClick with removeProperty function assigned*/}
        <PropertyGrid properties={this.state.saved} handleClick={this.removeProperty} saved={true}  className="saved"/>
      </aside>
    </div>
  }
}

export default App;
