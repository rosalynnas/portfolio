import { Scene } from "./components/scene";
import { Bio } from "./components/bio";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#8797c8] to-[#cdd2e0]">
      <Scene />
      <div className="bg-gradient-to-b from-[#dfe3ed] to-[#EFEBC8]">
        <Bio />
        <Footer />
      </div>
    </main>
  );
}
