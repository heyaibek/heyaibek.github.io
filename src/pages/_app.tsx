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
    content: '•';
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
          @heyaibek
        </NavLink>
        <NavLink href="/vibely" isActive={pathname.indexOf('/vibely') > -1}>
          Vibely
        </NavLink>
        <NavLink href="/brakata" isActive={pathname.indexOf('/brakata') > -1}>
          Brakata
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/heyaibek/"
          isActive={false}>
          Github
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/heyaibek/"
          isActive={false}>
          LinkedIn
        </NavLink>
      </Nav>
      <Component {...pageProps} />
      <div className='spacer' />
      <Footer>
        <Link href="/">
          <span className="rainbow font-semibold text-xs font-mono">
            &lt;/&gt; by @heyaibek
          </span>
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
