import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';

const Links = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 20px;
	margin-bottom: 1rem;
`;

function VibelyLinks() {
  const pathname = usePathname();
  return (
    <Links>
      <Link href="/vibely/">Home</Link>
      <Link href="/vibely/privacy">Privacy</Link>
      <Link href="/vibely/terms">Terms</Link>
      <Link href="/vibely/cookies">Cookies</Link>
      <Link href="/vibely/open-source">Libraries</Link>
    </Links>
  );
}

export { VibelyLinks };
