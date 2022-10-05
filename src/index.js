import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => (
  <div className='container'>
    <nav>
      <a href='https://linkedin.com/in/aimazh' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-linkedin fa-lg' />
      </a>
      <a href='https://instagram.com/aimkatagoi' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-instagram fa-lg' />
      </a>
      <a href='https://github.com/aimazh' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-github fa-lg' />
      </a>
      <a href='https://hyperfollow.com/brakata' target='_blank' rel='noopener noreferrer'>
        <i className='fab fa-spotify fa-lg' />
      </a>
      <a href='https://chksnd.app' target='_blank' rel='noopener noreferrer'>
        <i className='fas fa-globe fa-lg' />
        <span>chksnd</span>
      </a>
    </nav>
    <div>
      <h2>hi there <span role='img' aria-label=':wave:'>👋🏻</span></h2>
      <p>my name is aibek mazhitov</p>
    </div>
    <ul>
      <li>
        <span role='img' aria-label=':cool:'>😎</span>
        <span>&nbsp;</span>
        <span>i'm a software engineer @ spotify</span>
      </li>
      <li>
        <span role='img' aria-label=':laptop:'>👨🏻‍💻</span>
        <span>&nbsp;</span>
        <span>i'm a creator of chksnd</span>
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
