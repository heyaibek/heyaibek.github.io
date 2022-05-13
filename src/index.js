import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => (
  <div className='container'>
    <nav>
      <a href='https://linkedin.com/in/aimazh' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin fa-lg' />
        <span>linkedin</span>
      </a>
      <a href='https://github.com/aimazh' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github fa-lg' />
        <span>github</span>
      </a>
      <a href='https://chksnd.app' target='_blank' rel='noopener noreferrer'>
        <i className='fas fa-globe fa-lg' />
        <span>chksnd</span>
      </a>
      <a href='https://hyperfollow.com/brakata' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-spotify fa-lg' />
        <span>music</span>
      </a>
    </nav>
    <div>
      <h2>aibek mazhitov</h2>
      <p>hi there <span role='img' aria-label=':wave:'>👋🏻</span></p>
    </div>
    <ul>
      <li>
        <span role='img' aria-label=':cool:'>😎</span>
        <span>&nbsp;</span>
        <span>i'm software engineer @ spotify</span>
      </li>
      <li>
        <span role='img' aria-label=':laptop:'>👨🏻‍💻</span>
        <span>&nbsp;</span>
        <span>i'm creator of chksnd</span>
      </li>
      <li>
        <span role='img' aria-label=':piano:'>🎹</span>
        <span>&nbsp;</span>
        <span>i produce electronic music</span>
      </li>
    </ul>
    <footer className='rainbow'>
      <p>&lt;&gt; by @aimazh</p>
    </footer>
  </div>
);

ReactDOM.render((
  <App />
), document.getElementById('root'));
