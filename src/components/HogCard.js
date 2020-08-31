import React from 'react';

class HogCard extends React.Component{
    constructor(){
        super()
        this.state={
            clicked: false,
            hidden: false
        }
    }
    
    handleClick=(event)=>{
        if(event.target.name === 'moreInfo' || event.target.name === 'lessInfo'){
            this.setState({
                clicked: !this.state.clicked
            })
        } else if (event.target.name === 'hideMe'){
           this.setState({
                hidden: !this.state.hidden
            })
            this.props.handleHidden(this.props.hogInfo)
        }
    }

    render(){
        let pig_name = (this.props.hogInfo.name.split(" ").join('_')).toLowerCase()
        let pigImage = require(`../hog-imgs/` + pig_name + '.jpg') 
    
        if(this.state.clicked === false && this.state.hidden === false){
        return (
            <div className='pigTile'>
                <img src={pigImage} alt={this.props.hogInfo.name} />
                <p className='hoggyText'>{this.props.hogInfo.name}</p>
                <button name='moreInfo' onClick={this.handleClick}>More Info</button>
                <button name='hideMe' onClick={this.handleClick}>Hide Me</button>
            </div>
        )
        }else if (this.state.clicked === true && this.state.hidden === false){
            return (
                <div className='pigTile'>
                    <img src={pigImage} alt={this.props.hogInfo.name} />
                    <p>{this.props.hogInfo.name}</p>
                    <p>{this.props.hogInfo.specialty}</p>
                    <p>{this.props.hogInfo.weight}</p>
                    <p>{this.props.hogInfo.greased}</p>
                    <p>{this.props.hogInfo['highest medal achieved']}</p>
                    <button name='lessInfo' onClick={this.handleClick}>Show Less Info</button>
                    <button name='hideMe' onClick={this.handleClick}>Hide Me</button>
                </div>
        )
        }else if (this.state.hidden === true){
            return null
        }
    }
}

export default HogCard
