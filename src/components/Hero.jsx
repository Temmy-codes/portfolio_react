import SpotifyButton from "./SpotifyButton";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Listening is everything</h1>
      <p>Millions of songs. Free on Spotify.</p>
      <div className="cta-buttons">
        <SpotifyButton>Get Spotify Free</SpotifyButton>
        <SpotifyButton variant="secondary">Download App</SpotifyButton>
      </div>
    </section>
  );
}
