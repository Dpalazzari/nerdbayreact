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

  render(){
    return (
      <div className='bay'>
        <div>
          <ButtonMenu onClick={(i) => this.handleClick(i)}/>
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
