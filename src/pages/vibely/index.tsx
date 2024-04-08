import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Links = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default function Home() {
  return (
    <div>
      <Links>
        <Link href="/vibely/">Home</Link>
        <Link href="/vibely/privacy">Privacy</Link>
        <Link href="/vibely/terms">Terms</Link>
        <Link href="/vibely/cookies">Cookies</Link>
        <Link href="/vibely/open-source">Libraries</Link>
      </Links>
      <h4 className="lowercase text-base font-light m-0">Music visualization made easy</h4>
      <section>
        <video
          muted
          loop
          autoPlay
          poster="/promo-placeholder-ios.png"
          style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}>
          <source src="/promo-video-ios.webm" type="video/webm" />
        </video>
      </section>
      <section className="text-center">
        <h2 className="rainbow">Download</h2>
        <div className="app-badges flex items-center" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer">
            <Image className="ios" src="/app-badge-ios.png" alt="iOS" width={140} height={50} />
          </a>
        </div>
      </section>
      <section className="social">
        <a href="https://instagram.com/vibely.app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-xl" />
        </a>
        <a href="https://tiktok.com/@vibely.app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok fa-xl" />
        </a>
        <a href="https://github.com/chksnd" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-xl" />
        </a>
      </section>
    </div>
  );
}
