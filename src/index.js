import React from 'react';
import { createRoot } from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Online, Blog, Home, Music } from './pages';

const GlobalStyle = createGlobalStyle`
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

body {
  font-family: var(--font);
  font-size: 1rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-title);
  letter-spacing: -1.5px;
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
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/music" element={<Music />} />
          <Route path="/online" element={<Online />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
