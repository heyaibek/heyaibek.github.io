import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { Blog, BlogPost, Home } from './pages';
import { withBlog } from './hooks/useBlog';
import { useTheme, withTheme } from './hooks/useTheme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Main = styled.main`
  flex: 1;
  max-width: ${(props) => props.sizes.width}px;
  width: 100%;
  padding: 16px;
`;

const App = () => {
  const { sizes } = useTheme();

  return (
    <AppContainer>
      <Header />
      <Main sizes={sizes}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
};

export default withTheme(withBlog(App));
