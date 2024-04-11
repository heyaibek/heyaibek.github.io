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

  & > .spacer {
    flex: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: rgba(var(--text-rgb), ${(props) => (props.isActive ? 1.0 : 0.5)});
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;

  & a {
    text-decoration: none;
  }
  
  & > .spacer {
    flex: 1;
  }

	@media screen and (max-width: 600px) {
		flex-direction: column;
    gap: 5px;
	}
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
        <div className="spacer" />
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/imprint">Imprint</Link>
        <span>&copy; {new Date().getFullYear()}</span>
      </Footer>
    </Main>
  );
}
