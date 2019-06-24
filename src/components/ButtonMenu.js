import React from 'react';

class ButtonMenu extends React.Component {
  render(){
    return (
      <div className='button-menu'>
        <button className='status-button' key={0} value={'top-twitch'} onClick={this.props.onClick}>Top Twitch Stream</button>
        <button className='status-button' key={1} value={'twitch'} onClick={this.props.onClick}>Twitch</button>
        <button className='status-button' key={2} value={'espn'} onClick={this.props.onClick}>ESPN</button>
        <button className='status-button' key={3} value={'reddit'} onClick={this.props.onClick}>Reddit</button>
        <button className='status-button' key={4} value={'hacker'} onClick={this.props.onClick}>Hacker News</button>
        <button className='status-button' key={5} value={'ign'} onClick={this.props.onClick}>IGN</button>
        <button className='status-button' key={6} value={'weather'} onClick={this.props.onClick}>Weather</button>
        <button className='status-button-movie' key={7} value={'movies'} onClick={this.props.onClick}>Movies</button>
      </div>
    )
  }
}

export default ButtonMenu;