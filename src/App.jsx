import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Player from "./components/Player";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-section">
        <Card
          image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=300&h=300"
          title="Create Playlists"
          description="Easily create and share playlists with friends."
        />
        <Card
          image="https://images.unsplash.com/photo-1511376777868-611b54f68947?fit=crop&w=300&h=300"
          title="Discover Music"
          description="Find new songs and artists tailored to your taste."
        />
        <Card
          image="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?fit=crop&w=300&h=300"
          title="Listen Anywhere"
          description="Stream on mobile, desktop, and more."
        />
      </section>
      <Player isPlaying={false} />
      <Footer />
    </>
  );
}
