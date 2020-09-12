import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <h1>Aibek Mazhitov</h1>
        <ul>
          <li>Software engineer @ <a href='https://www.flatex.com/'>flatexAG</a></li>
          <li>Founder @ <a href='https://aimazh.github.io/chksndapp/'>ChkSnd</a></li>
          <li>Music producer @ <a href='https://soundcloud.com/brakata/tracks'>Soundcloud</a></li>
        </ul>
      </div>

      <div className='social'>
        <a className='instagram' href='https://www.instagram.com/aimazh_/'>
          <i className='fab fa-instagram fa-2x' />
        </a>
        <a className='github' href='https://github.com/aimazh'>
          <i className='fab fa-github fa-2x' />
        </a>
        <a className='linkedin' href='https://www.linkedin.com/in/aimazh/'>
          <i className='fab fa-linkedin fa-2x' />
        </a>
      </div>

      <div className='divider' />

      <div className='my-projects'>
        <h2>My Projects</h2>

        <div className='projects'>
          <div className='project'>
            <img className='logo' src='https://aimazh.github.io/chksndapp/static/media/app-logo.6d49b9eb.png' />
            <h2 className='name'>ChkSnd</h2>
            <p className='description'>ChkSnd is a tool to create music<br />videos with visual accompaniment.<br /><br />Available for iOS and Android.</p>
            <a className='website' href='https://aimazh.github.io/chksndapp/'>Website</a>
          </div>
        </div>
      </div>

      <div className='divider' />

      <div className='my-music'>
        <h2>My Music</h2>
        <div className='soudcloud-tracks'>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/738404512&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734371576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566240346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566233968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </div>
      </div>

      <div className='divider' />

      <div className='footer'>
        <div>Developed by @aimazh</div>
        <div>&copy; 2020</div>
      </div>
    </div>
  )
}

ReactDOM.render((
  <App />
), document.getElementById('root'))