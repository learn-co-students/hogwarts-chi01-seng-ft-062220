import React, { Component } from "react";

// import PigPen from "./PigPen.js"

class PigTile extends Component {
    getImage = () => {
        let name = this.props.name.split(' ').join('_').toLowerCase()
        let url = require(`../hog-imgs/${name}.jpg`)
        return <img src={url} />
    }

    render() {
        const{
            name,
            specialty,
            weight,
            greased,
            ...medal
        } = this.props.hog
        return (
        <div>
            {this.getImage()}
            <h3>My name is {name}, I'm a pig!</h3>
            <p>I do {specialty} sometimes. </p>
            <p>I weigh {weight} kilos(?)</p>
            <p>My best medal is the {medal['highest medal achieved']} medal!</p>
            <p>Am I greased? {greased ? 'Yes!' : 'No!'} </p>
            <br/>
        </div>
        );
    }
}

export default PigTile;