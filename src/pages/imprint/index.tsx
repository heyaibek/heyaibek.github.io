import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Impressum</h1>
      <h3>Angaben gem. §5 TMG:</h3>
      <address>
        Aibek Mazhitov
        <br />
        Wittenberger Str. 37
        <br />
        04129 Leipzig
        <br />
        Deutschland
      </address>
      <h3>Kontakt:</h3>
      <address>
        Email: heyaibek [at] gmail [dot] com
        <br />
        Telefon: +49 1525 7276876
        <br />
        Fax: n/a
        <br />
        Web: <Link href="/">https://heyaibek.github.io</Link>
      </address>
      <h3>Legal:</h3>
      <address>Umsatzsteuer-ID gem. §27a UStG: DE 366980568</address>
    </div>
  );
}
