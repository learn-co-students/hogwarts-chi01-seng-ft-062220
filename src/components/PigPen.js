import React, { Component } from "react";
import App from "./App.js";
import PigTile from "./PigTile"

class PigPen extends Component {
    render() {
        const{hogs}=this.props
        const getPigs = hogs.map(hog => <PigTile key={hog.name} name={hog.name} specialty={hog.specialty} hog={hog} />)
        return (
            <div>
                <h1>Hello from the Pig Pen!</h1>
                {getPigs}
            </div>
        );
    }
}

export default PigPen;