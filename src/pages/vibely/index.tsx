import Image from 'next/image';
import styled from 'styled-components';
import Head from 'next/head';
import { Divider } from '@/components';

const Social = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const Container = styled.div`
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vibely Visualizer for iOS</title>
      </Head>
      <h1>Vibely</h1>
      <p>Vibely enables creators to visualize & share music</p>
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
        <h1>Download</h1>
        <div className="app-badges flex items-center" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer">
            <Image className="ios" src="/app-badge-ios.png" alt="iOS" width={140} height={50} />
          </a>
        </div>
      </section>
      <Divider />
      <section className="mb">
        <h1>Follow Us</h1>
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
      </section>
    </Container>
  );
}
