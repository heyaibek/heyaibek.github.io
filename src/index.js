import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { Footer, Playlist } from './components';

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
  --font-title: system-ui, serif;

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

html,body,#root{
  height: 100%;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font);
  font-size: 1rem;
  font-weight: 400;
  padding: 0 16px;
}

pre {
  line-height: 1.2rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-title);
  letter-spacing: -1px;
  line-height: 2rem;
}


a {
  position: relative;
  color: var(--color-primary);
  font-weight: bold;

  &.github {
    color: var(--color-github);
    margin-right: 8px;
  }

  &.linkedin {
    color: var(--color-linkedin);
    margin-right: 8px;
  }
  
  &.instagram {
    color: var(--color-instagram);
    margin-right: 8px;
  }
}

#root {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &::before, &::after {
    content: "";
    display: block;
    height: 32px;
  }
}
`;

const CustomLink = ({ href, ...props }) => {
  if (href.indexOf('playlist') > -1) {
    return <Playlist />;
  }
  if (href.indexOf('instagram') > -1) {
    return (
      <a
        className="social instagram"
        href="https://instagram.com/heyaibek"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-instagram fa-2x" />
      </a>
    );
  }
  if (href.indexOf('github') > -1) {
    return (
      <a
        className="social github"
        href="https://github.com/heyaibek"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-github fa-2x" />
      </a>
    );
  }
  if (href.indexOf('linkedin') > -1) {
    return (
      <a
        className="social linkedin"
        href="https://linkedin.com/in/heyaibek"
        target="_blank"
        rel="noreferrer">
        <i className="fab fa-linkedin fa-2x" />
      </a>
    );
  }
  // eslint-disable-next-line
  return <a href={href} {...props} />;
};

const NextApp = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/heyaibek/heyaibek/main/README.md'
      );
      setData(await response.text());
    };
    loadData();
  }, []);

  return (
    <Markdown
      children={data}
      options={{
        overrides: {
          a: CustomLink,
        },
      }}
    />
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <NextApp />
    <Footer>
      &lt;&gt; by <strong>@heyaibek</strong>
    </Footer>
  </>
);
