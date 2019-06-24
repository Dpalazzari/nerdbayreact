import React from 'react';
import ReactDOM from 'react-dom';
import ButtonMenu from './ButtonMenu'
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
      reddit: false
    }
  }

  render(){
    return (
      <div className='bay'>
        <div className='button-menu'>
          <ButtonMenu />
        </div>
      </div>
    );
  }
}

ReactDOM.render
  (
    <Bay />, 
    document.getElementById('root'),
    document.body.classList.add('bay-body')
  );
