import Image from 'next/image';
import styled from 'styled-components';
import Head from 'next/head';
import { Divider } from '@/components';
import Link from 'next/link';
import { countryFlags, generateStars, ratings } from './utils';

const Social = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const Container = styled.div`
  text-align: center;
`;

const News = styled.div`
  background: rgba(var(--text-rgb), 0.05);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const Ratings = styled.div`
  text-align: start;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;

  & > * {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > :nth-child(1) > .stars {
      color: rgba(var(--rating-rgb), 1);
      margin-right: 0.5rem;
    }

    & > :nth-child(2) {
      font-weight: bold;
    }
  }

	@media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
	}
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vibely Visualizer for iOS</title>
      </Head>
      <h1>Vibely</h1>
      <p>Vibely enables creators to visualize & share music</p>
      <News className="mb">
        <Link href="/post/release-notes-v3.0.0">
          A New Era for Vibely v3.0.0{' '}
          <span role="img" aria-label="shine">
            🌟
          </span>
        </Link>
      </News>
      <section className="mb">
        <video
          muted
          loop
          autoPlay
          poster="/vibely-preview-placeholder.jpg"
          style={{ width: '100%', maxWidth: 200, borderRadius: 8 }}>
          <source src="/vibely-preview-video.webm" type="video/webm" />
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
        <h1>User Reviews</h1>
        <p>3.4 of 5.0 from 543 ratings</p>
        <Ratings>
          {ratings.map((r, i) => (
            <div key={i}>
              <span>
                <span className="stars">{generateStars(r.rating)}</span>
                <span className="country">
                  <span className="flag" role="img" aria-label={r.from}>
                    {countryFlags[r.from]}
                  </span>{' '}
                  <span>{r.from}</span>
                </span>
              </span>
              <span>{r.title}</span>
              <span>{r.message}</span>
            </div>
          ))}
        </Ratings>
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
