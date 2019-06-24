import React from 'react';

class ButtonMenu extends React.Component {
  render(){
    return (
      <ul>
        <li>
          <button className='status-button' key={0} onClick={() => alert('clicked!')}>Top Twitch</button>
        </li>

        <li>
          <button className='status-button' key={1} onClick={() => alert('clicked!')}>Twitch</button>
        </li>

        <li>
          <button className='status-button' key={2} onClick={() => alert('clicked!')}>ESPN</button>
        </li>

        <li>
          <button className='status-button' key={3} onClick={() => alert('clicked!')}>Reddit</button>
        </li>

        <li>
          <button className='status-button' key={4} onClick={() => alert('clicked!')}>Hacker News</button>
        </li>

        <li>
          <button className='status-button' key={5} onClick={() => alert('clicked!')}>IGN</button>
        </li>

        <li>
          <button className='status-button' key={6} onClick={() => alert('clicked!')}>Weather</button>
        </li>

        <li>
          <button className='status-button' key={7} onClick={() => alert('clicked!')}>Movies</button>
        </li>
      </ul>
    )
  }
}

export default ButtonMenu;