import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigPen from "./PigPen.js";
import Filter from "./Filter"
// import hogImages from "../hog-imgs"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allHogs: hogs,
      filter: {key: 'name'},
      // images: hogImages
    }
  }

  // getImage = allHogs => {
  //   let hogName = allHogs
  //   return console.log(hogName)
  // }
  

  filterByName = (event) => {
    const onChangeVal = event.target.value
    this.setState({
      allHogs: hogs,
      key: onChangeVal
    })
    let theSortedPigs = []
    if(event.target.value === 'name'){
      theSortedPigs = this.state.allHogs.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      })
    }
    else {
      theSortedPigs = this.state.allHogs.sort((a, b) => {
        return a.weight < b.weight ? -1 : a.weight > b.weight ? 1 : 0
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter filterByName={this.filterByName} />
        <PigPen hogs={this.state.allHogs}/>
      </div>
    );
  }
}

export default App;


// X grab the hogs that we have,
// X set a state
  // X make a child component
//   X render all the hogs into child component
//        X render all keys
//        X render their medal
//        get each hog's picture???