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
    let str = `The Top Twitch state is ${this.state.top}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  hacker(){
    let str = `The Hacker News state is ${this.state.hacker}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  twitch(){
    let str = `The Twitch state is ${this.state.twitch}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  reddit(){
    let str = `The Reddit state is ${this.state.reddit}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  espn(){
    let str = `The ESPN state is ${this.state.espn}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  movies(){
    let str = `The Movies state is ${this.state.movies}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  ign(){
    let str = `The IGN state is ${this.state.ign}`
    return (
      <p className='top-twitch'>{str}</p>
    )
  }

  weather(){
    let str = `The weather state is ${this.state.weather}`
    return (
      <p className='top-twitch'>{str}</p>
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
