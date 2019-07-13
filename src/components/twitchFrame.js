import React from 'react';
import Iframe from 'react-iframe'

class TwitchFrame extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: null
    }
  }

  componentDidMount(){
    const url = 'http://localhost:9292/api/v1/nerdbay/twitch/top'
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(result => result.json())
    .then(data => {
      this.setState({
        name: data.channel.name
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    const str = `Check out ${this.state.name}'s stream!`
    return (
      <div className='top-twitch-component'>
        <h1 class='top-twitch'>Hottest Twitch Stream</h1>
        <Iframe url={`https://player.twitch.tv/?channel=${this.state.name}`}
          width="750px"
          height="400px"
          id="myId"
          className="myClassname"
          display="initial"
          frameborder="0"
          allowfullscreen="true"
        />
        <a 
          href={`https://www.twitch.tv/${this.state.name}?tt_medium=live_embed&tt_content=text_link`} 
          target="_blank" 
          rel="noopener noreferrer" 
          styles={{
            padding: "2px 0px 4px",
            display: 'block',
            width: '345px',
            fontWeight: 'normal',
            fontSize: '10px',
            textDecoration: 'underline'
          }}>
          {str}
        </a>
      </div>
    )
  }
}

export default TwitchFrame;