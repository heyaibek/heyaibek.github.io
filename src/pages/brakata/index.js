export default function Home() {
  return (
    <div className="brakata container mx-auto">
      <iframe
        title="Brakata Tracks"
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/playlist/25O54nArGPTdhD5j8HapHw?utm_source=generator&theme=0"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="mb-6"
      />
      <section className="text-center">
        <h3>Follow Brakata</h3>
        <div className="social">
          <a
            href="https://open.spotify.com/artist/2wQZi1X99quj4L7VUuChnu"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-spotify fa-xl" />
          </a>
          <a
            href="https://music.apple.com/artist/brakata/1559429756"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-apple fa-xl" />
          </a>
          <a
            href="https://music.youtube.com/channel/UC4Ix-OYwrQWlYNRuztVwSKA?feature=share"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-youtube fa-xl" />
          </a>
        </div>
      </section>
    </div>
  );
}
