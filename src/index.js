import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Tilt from 'react-parallax-tilt';
import { createGlobalStyle } from 'styled-components';
import { Footer, Playlist, Rainbow } from './components';

const GlobalStyle = createGlobalStyle`
:root {
  // sizes
  --width: 668px;
  --padding: 16px;
  --fourPaddings: 64px;
  --gap: 16px;
  --halfGap: 8px;

  // fonts
  --font: -apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;
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
  --color-link: black;
  --color-link-shadow: yellow;
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
    --color-link: yellow;
    --color-link-shadow: rgba(255,255,255,0.5);
  }
}

html,body,#root{
  height: 100%;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font);
  font-size: 1.15rem;
  font-weight: 400;
  padding: 0 16px;
  line-height: 1.75rem;
}

pre {
  line-height: 1.2rem;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--font-title);
  letter-spacing: -1px;
  line-height: 2rem;
}

h1 { font-size: 3rem; }
h2 { font-size: 1.55rem; }

h2 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 12px;
}

a {
  text-decoration: none;
  position: relative;
  color: var(--color-link);
  text-shadow: 2px 2px 2px var(--color-link-shadow);

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
    height: 48px;
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
  return <a {...props} href={href} target="_blank" rel="noreferrer" />;
};

const CustomStrong = ({ children, ...props }) => {
  if (children.indexOf('Aibek') > -1) {
    return <Rainbow>{children}</Rainbow>;
  }
  return <strong children={children} {...props} />;
};

const CustomImage = ({ ...props }) => {
  props.className = props.class;
  delete props.class;
  if (props.className === '3d') {
    return (
      <Tilt scale={1.1} transitionSpeed={2500} style={{ display: 'inline-block' }}>
        <img alt="tilted" {...props} />
      </Tilt>
    );
  }
  return <img alt="default" {...props} />;
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
          strong: CustomStrong,
          img: CustomImage,
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
