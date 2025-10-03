export default function SpotifyButton({ children, variant = "primary" }) {
  return (
    <button className={`spotify-btn ${variant}`}>
      {children}
    </button>
  );
}
