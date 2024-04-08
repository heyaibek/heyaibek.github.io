import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { AppProps } from 'next/app';

const Main = styled.main`
  max-width: var(--size-container);
  width: 100%;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
	margin-bottom: 1rem;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: rgba(var(--text-rgb), ${(props) => (props.isActive ? 1.0 : 0.5)});
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  
  & a {
    text-decoration: none;
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
          href="https://www.linkedin.com/in/heyaibek/"
          isActive={false}>
          LinkedIn
        </NavLink>
      </Nav>
      <Component {...pageProps} />
      <Footer>
        <Link href="/">
          <span className="rainbow font-semibold text-xs font-mono">
            &copy; {new Date().getFullYear()} &lt;/&gt; by @heyaibek
          </span>
        </Link>
      </Footer>
    </Main>
  );
}
