import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { About, Blog, Home, Music } from './pages';

// import './index.scss';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  // fonts
  --font: 'Noto Serif', serif;
  --font-title: 'Open Sans', sans-serif;

  // colors
  --bg-color: #ffffff;
  --footer-color: #f7fafb;
  --main-color: #56949f;
  --text-color: #3a4145;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body,#root{
  height: 100%;
}
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
  max-width: 768px;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/blog" element={Blog} />
          <Route path="/music" element={Music} />
          <Route path="/about" element={About} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
