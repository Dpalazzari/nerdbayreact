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
      topTwitch: false,
      espn: false,
      ign: false,
      movies: false,
      hackerNews: false,
      reddit: false,
      weather: false
    }
  }

  handleClick(i){
    const buttonValue = i.target.value;
    let stateObj, bool;
    switch (buttonValue){
      case 'top-twitch':
        stateObj = clone(this.state);
        bool = stateObj.topTwitch;
        stateObj.topTwitch = !bool;
        break;
      case 'twitch':
        stateObj = clone(this.state);
        bool = stateObj.twitch;
        stateObj.twitch = !bool;
        break;
      case 'espn':
        stateObj = clone(this.state);
        bool = stateObj.espn;
        stateObj.espn = !bool;
        break;
      case 'hacker':
        stateObj = clone(this.state);
        bool = stateObj.hackerNews;
        stateObj.hackerNews = !bool;
        break;
      case 'reddit':
        stateObj = clone(this.state);
        bool = stateObj.reddit;
        stateObj.reddit = !bool;
        break;
      case 'ign':
        stateObj = clone(this.state);
        bool = stateObj.ign;
        stateObj.ign = !bool;
        break;
      case 'weather':
        stateObj = clone(this.state);
        bool = stateObj.weather;
        stateObj.weather = !bool;
        break;
      case 'movies':
        stateObj = clone(this.state);
        bool = stateObj.movies;
        stateObj.movies = !bool;
        break;
      default:

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
