import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import ChkSndLogo from './assets/images/chksnd-logo.png'
import FortylinesLogo from './assets/images/fortylines.svg'

const App = () => {
  React.useEffect(() => {
    if (window.location.pathname.indexOf('zoom') > -1) {
      window.location = 'https://us05web.zoom.us/j/4680273949'
    }
  }, [])

  return (
    <div className='app'>
      <div className='header'>
        <h1 className='rainbow'>Aibek Mazhitov</h1>
        <div className='bio'>
          <p>Hi there <span role='img' aria-label='hands-up'>👋</span>!</p>
          <p>I'm a Software Engineer at <a href='https://www.flatex.com/'>flatexAG</a>.</p>
          <p>I also created <a href='https://aimazh.github.io/chksndapp/'>ChkSnd</a>.</p>
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
        <a className='leetcode' href='https://leetcode.com/aimazh'>
          <i className='fab fa-codepen fa-2x' />
        </a>
        <a className='spotify' href='https://open.spotify.com/user/217dpiqihjneujcuut5kl5wma?si=d7d861385e724b68'>
          <i className='fab fa-spotify fa-2x' />
        </a>
      </div>

      <div className='divider' />

      <div className='my-projects'>
        <h2>My Apps</h2>

        <div className='projects'>
          <div className='project'>
            <img className='logo' src={ChkSndLogo} alt='logo' />
            <h2 className='name'>ChkSnd</h2>
            <p className='description'>ChkSnd is a tool to create music<br />videos with visual accompaniment.<br /><br />Available for iOS and Android.</p>
            <a className='website' href='https://chksnd.github.io/'>Website</a>
          </div>
          <div className='project'>
            <img className='logo' src={FortylinesLogo} alt='logo' />
            <h2 className='name'>Fortylines</h2>
            <p className='description'>Fortylines is a team of<br />young and ambitious people,<br />who build and deliver high-quality<br />IT solutions to the world.</p>
            <a className='website' href='https://fortylinesio.github.io/'>Website</a>
          </div>
        </div>
      </div>

      <div className='divider' />

      <div className='my-music'>
        <h2>My Music</h2>
        <div className='soudcloud-tracks'>
          <div className='track'>
            <iframe title='music-a' width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/738404512&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe title='music-b' width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734371576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe title='music-c' width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566240346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe title='music-d' width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566233968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
        </div>
      </div>

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
