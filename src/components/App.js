import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from './HogIndex'

class App extends Component {
  constructor(){
    super();
    this.state={
      hogs: hogs,
      greased: false,
      sort: "",
      hidden: [],
      reveal: false
    }
  }

  handleFilter=()=>{
    this.setState({
      greased: !this.state.greased
    })
  }

  handleSort=(event)=>{
    this.setState({
      sort: event.target.value
    })
  }

  handleHidden= hog =>{
    this.setState({
      hidden:[...this.state.hidden, hog]
    })
  }

  revealHidden=()=>{
    this.setState({
      reveal: !this.state.reveal
    })
  }

  selectedHogsOnly = () =>{
    let selectedHogs=[...this.state.hogs]
    if(this.state.greased === true){
      selectedHogs = selectedHogs.filter(hogs => hogs.greased)
    }

    if(this.state.sort === 'weight'){
      selectedHogs = selectedHogs.sort(function (a, b) { return a.weight - b.weight})
    } 
    
    if (this.state.sort === 'name'){
      selectedHogs = selectedHogs.sort(function (a, b) { 
        return a.name < b.name ? -1 : 1
      })
    }

    if (this.state.reveal === true){
      selectedHogs = this.state.hidden
    }
    return selectedHogs
  }

  render() {
    const selectedHogs = this.selectedHogsOnly()
    
    return (
      <div className="App">
        <Nav handleFilter={this.handleFilter} handleSort={this.handleSort} revealHidden={this.revealHidden}/>
        <HogIndex handleHidden={this.handleHidden} hogs={selectedHogs}/>
      </div>
    );
  }
}

export default App;
