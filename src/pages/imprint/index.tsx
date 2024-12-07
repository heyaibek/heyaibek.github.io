import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>Impressum</h2>
      <h4>Angaben gem. §5 TMG:</h4>
      <address>
        Aibek Mazhitov
        <br />
        Friedenauer Höhe 22
        <br />
        12159 Berlin
        <br />
        Deutschland
      </address>
      <h4>Kontakt:</h4>
      <address>
        Email: heyaibek [at] gmail [dot] com
        <br />
        Telefon: +49 1525 7276876
        <br />
        Fax: n/a
        <br />
        Web: <Link href="/">https://heyaibek.github.io</Link>
      </address>
      <h4>Legal:</h4>
      <address>Umsatzsteuer-ID gem. §27a UStG: DE 366980568</address>
    </div>
  );
}
