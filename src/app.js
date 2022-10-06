import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { Blog, BlogPost, Home, NotFound } from './pages';
import { withBlog } from './hooks/useBlog';
import { withTheme } from './hooks/useTheme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
  max-width: var(--width);
  width: 100%;
  padding: var(--padding);
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default withTheme(withBlog(App));
