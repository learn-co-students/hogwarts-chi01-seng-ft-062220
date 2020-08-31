import React from "react";
import HogCard from './HogCard.js'

const HogIndex = (props) => {
    return (
        <div className='ui three cards'>
        {props.hogs.map((hogInfo, index)=>{
            return (
            <HogCard key={index} handleHidden={props.handleHidden} hogInfo={hogInfo}/>
            )
        })}
        </div>
    )
}

export default HogIndex