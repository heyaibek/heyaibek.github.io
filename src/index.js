import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const GlobalStyle = createGlobalStyle`
:root {
  // sizes
  --width: 668px;
  --padding: 16px;
  --fourPaddings: 64px;
  --gap: 16px;
  --halfGap: 8px;

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
  --color-github: #24292e;
  --color-linkedin: #0073b1;
  --color-instagram: #e1306c;
}

@media (prefers-color-scheme: dark) {
  :root {
    // colors
    --color-bg: #0e141b;
    --color-bg-offset: #252526;
    --color-text: #ffffff;
    --color-text-offset: #818a91;
    --color-border: #2d2d2d;
    --color-primary: #ff5277;
    --color-primary-offset: #ff2957;
    --color-secondary: #43a9a3;
    --color-github: #ffffff;
    --color-linkedin: #0073b1;
    --color-instagram: #e1306c;
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
  font-size: 1.1rem;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.8rem;
}

pre {
  line-height: 1.2rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-title);
  letter-spacing: -1px;
  line-height: 2rem;
  margin-bottom: 3rem;
}

p {
  margin-bottom: 1rem;
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
  
  &.active {
    &:before {
      background-color: var(--color-primary);
    }
  }
  
  &:hover {
    &:before {
      background-color: var(--color-primary);
    }
  }
}
`;

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
