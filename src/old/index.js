import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import ChkSndLogo from './assets/images/chksnd-logo.png'

import { MyMusic } from './MyMusic';

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <h1 className='rainbow'>Aibek Mazhitov</h1>
        <div className='bio'>
          <p>Hi there <span role='img' aria-label='hands-up'>👋</span></p>
          <p>I'm a Software Engineer at <a href='https://spotify.com/'>Spotify</a>.</p>
          <p>I also created <a href='https://chksnd.app'>ChkSnd</a>.</p>
          <p>In my free time I produce electronic <a href='https://soundcloud.com/brakata'>music</a>.</p>
        </div>
      </div>

      <div className='social'>
        <a className='linkedin' href='https://www.linkedin.com/in/aimazh/'>
          <i className='fab fa-linkedin fa-2x' />
        </a>
        <a className='github' href='https://github.com/aimazh'>
          <i className='fab fa-github fa-2x' />
        </a>
        <a className='telegram' href='https://t.me/brakatamusic'>
          <i className='fab fa-telegram fa-2x' />
        </a>
      </div>

      <div className='divider' />

      <div className='my-projects'>
        <h2>My Apps</h2>

        <div className='projects'>
          <div className='project'>
            <img className='logo' src={ChkSndLogo} alt='logo' />
            <h2 className='name'>ChkSnd</h2>
            <p className='description'>ChkSnd is an app to create music<br />videos with a visual audio spectrum.<br /><br />Available for iOS and Android.</p>
            <a className='website' href='https://chksnd.app'>Website</a>
          </div>
        </div>
      </div>

      <div className='divider' />

      <MyMusic />

      <div className='divider' />

      <div className='footer'>
        <div>&lt;&gt; with &hearts;</div>
        <div>{new Date().getFullYear()} &copy; aimazh</div>
      </div>
    </div >
  )
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
