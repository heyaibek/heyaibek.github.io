import Image from 'next/image';
import styled from 'styled-components';
import Head from 'next/head';

const Social = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vibely Visualizer for iOS</title>
      </Head>
      <h2>Music visualization made easy</h2>
      <section className="mb">
        <video
          muted
          loop
          autoPlay
          poster="/promo-placeholder-ios.png"
          style={{ width: '100%', maxWidth: 200, borderRadius: 8 }}>
          <source src="/promo-video-ios.webm" type="video/webm" />
        </video>
      </section>
      <section className="mb">
        <h2>Download</h2>
        <div className="app-badges flex items-center" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer">
            <Image className="ios" src="/app-badge-ios.png" alt="iOS" width={140} height={50} />
          </a>
        </div>
      </section>
      <Social>
        <a href="https://instagram.com/vibely.app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-xl" />
        </a>
        <a href="https://tiktok.com/@vibely.app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok fa-xl" />
        </a>
        <a href="https://github.com/chksnd" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-xl" />
        </a>
      </Social>
    </div>
  );
}
