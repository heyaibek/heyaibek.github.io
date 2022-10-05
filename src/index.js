import React from 'react';
import ReactDOM from 'react-dom';
import { Footer, Nav, Posts, Profile } from './components';

import './index.scss';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Profile />
      <Posts />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
