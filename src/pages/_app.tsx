import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { AppProps } from 'next/app';

const Main = styled.main`
  height: 100vh;
  max-width: var(--size-container);
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .spacer {
    flex: 1;
  }
`;

const Nav = styled.nav`
  background: rgba(var(--text-rgb), 0.05);
  width: 100%;
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-radius: 0.5rem;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: rgba(var(--text-rgb), ${(props) => (props.isActive ? 1.0 : 0.5)});
  text-decoration: none;
  display: flex;
  gap: 5px;
  
  &:hover {
    color: rgba(var(--text-rgb), 1.0);
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;

  & a {
    text-decoration: none;
  }
  
  &:before {
    content: '-';
    font-size: 0.5rem;
    display: block;
  }
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <Main>
      <Nav>
        <NavLink href="/" isActive={pathname === '/'}>
          <span role="img" aria-label="love you gesture">
            🤟🏻
          </span>
          <span>@heyaibek</span>
        </NavLink>
        <NavLink href="/vibely" isActive={pathname.indexOf('/vibely') > -1}>
          <span role="img" aria-label="mobile phone">
            📱
          </span>
          <span>Vibely</span>
        </NavLink>
        <NavLink href="/brakata" isActive={pathname.indexOf('/brakata') > -1}>
          <span role="img" aria-label="musical keyboard">
            🎹
          </span>
          <span>Brakata</span>
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/heyaibek/"
          isActive={false}>
          <span role="img" aria-label="man technologist">
            👨🏻‍💻
          </span>
          <span>Github</span>
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/heyaibek/"
          isActive={false}>
          <span role="img" aria-label="briefcase">
            💼
          </span>
          <span>LinkedIn</span>
        </NavLink>
      </Nav>
      <Component {...pageProps} />
      <div className="spacer" />
      <Footer>
        <Link href="/">
          <span className="rainbow font-semibold text-xs font-mono">&lt;/&gt; by @heyaibek</span>
        </Link>
        <FooterLinks>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/imprint">Imprint</Link>
        </FooterLinks>
        <span>&copy; {new Date().getFullYear()}</span>
      </Footer>
    </Main>
  );
}
