import React from 'react';

//add handle onChange for dropdown (name/weight)
//  add callback grab functions in App.js
//  function filterChild has helper functions
//      filterPigsByName (alphabetically)
//      filterPigsByWeight
            // brings back those PIGS
//add handle onChange for checkbox greased

class Filter extends React.Component {

render(){
  return (
    <div className='filterWrapper'>
      <div className='ui menu'>
        <div className='item'>
          <label>Sort by </label>
        </div>
        <div className='ui item'>
          <select
            className='ui selection dropdown'
            name='sort'
            onChange={this.props.filterByName}
            // value={}
          >
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
          </select>
        </div>
        <div className='item'>
          <label>Greased Pigs Only?</label>
        </div>
        <div className='item'>
          <input
            className='ui toggle checkbox'
            // checked={}
            // onChange={}
            type='checkbox'
          />
        </div>
        <div className='ui right menu'>
          <div className='item'>
            <button
              className='ui blue basic button compact'
              // onClick={}
            >
              Hidden Hogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
};


export default Filter;