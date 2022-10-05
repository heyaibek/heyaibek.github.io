import React from 'react';
import { createRoot } from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Blog, Home } from './pages';

const GlobalStyle = createGlobalStyle`
:root {
  // fonts
  --font: 'Noto Serif', serif;
  --font-title: 'Open Sans', sans-serif;

  // colors
  --color-bg: #ffffff;
  --color-bg-offset: #f7f7f9;
  --color-text: #373a3c;
  --color-text-offset: #818a91;
  --color-border: #eceeef;
  --color-primary: #ff335f;
  --color-primary-offset: #ff1447;
  --color-secondary: #43a9a3;
  
  // --color-bg: #0e141b;
  // --color-bg-offset: #252526;
  // --color-text: #ffffff;
  // --color-text-offset: #818a91;
  // --color-border: #2d2d2d;
  // --color-primary: #ff5277;
  // --color-primary-offset: #ff2957;
  // --color-secondary: #43a9a3;
}
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
  background-color: var(--color-bg);
  color: var(--color-text);
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-title);
  letter-spacing: -1px;
}

a {
  text-decoration: none;
  position: relative;
  color: var(--color-text);
  font-weight: bold;
  transition: color 0.16s;
  
  &:before {
    content: '';
    display: inline-block;
    height: 6px;
    width: 100%;
    background-color: var(--color-border);
    position: absolute;
    bottom: 1px;
    left: 4px;
    z-index: -1;
    transition: background-color 0.16s;
  }
  
  &:hover {
    &:before {
      background-color: var(--color-primary);
    }
  }
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
  padding: 16px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
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
