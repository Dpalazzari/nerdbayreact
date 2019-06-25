import React from 'react';
import ReactDOM from 'react-dom';
import ButtonMenu from './components/ButtonMenu'
import { clone, classSetter } from './helperFunctions/helpers'
import './index.css';

class Bay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      twitch: false,
      top: false,
      espn: false,
      ign: false,
      movies: false,
      hacker: false,
      reddit: false,
      weather: false
    }
  }

  handleClick(i){
    const buttonValue = i.target.value;
    let stateObj, bool;
    switch (buttonValue){
      case 'top':
      case 'twitch':
      case 'espn':
      case 'hacker':
      case 'reddit':
      case 'ign':
      case 'weather':
      case 'movies':
        stateObj = clone(this.state);
        bool = stateObj[buttonValue];
        stateObj[buttonValue] = !bool;
        break;
      default:
        stateObj = clone(this.state);
    }
    this.setState(stateObj);
    classSetter(!bool, i)
  }

  top(){
    return (
      <p className='top-twitch'>Top Twitch State is true</p>
    )
  }

  hacker(){
    return (
      <p className='top-twitch'>Hacker News State is true</p>
    )
  }

  twitch(){
    return (
      <p className='top-twitch'>Twitch State is true</p>
    )
  }

  reddit(){
    return (
      <p className='top-twitch'>Reddit State is true</p>
    )
  }

  espn(){
    return (
      <p className='top-twitch'>ESPN State is true</p>
    )
  }

  movies(){
    return (
      <p className='top-twitch'>Movies State is true</p>
    )
  }

  ign(){
    return (
      <p className='top-twitch'>IGN State is true</p>
    )
  }

  weather(){
    return (
      <p className='top-twitch'>Weather State is true</p>
    )
  }

  render(){
    const dataComponents = Object.keys(this.state).map(value => {
      return (this.state[value]) ? this[value]() : <p></p>
    })
    return (
      <div>
        <div className='bay'>
          <ButtonMenu onClick={(i) => this.handleClick(i)}/>
          <div className='component-renderings'>
            {dataComponents}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Bay />, 
  document.getElementById('root'),
  document.body.classList.add('bay-body')
);
