import { Scene } from "./components/scene";
import { Bio } from "./components/bio";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#9CAAD5] to-[#EFEBC8]">
      <Scene />
      <div className="bg-gradient-to-b from-[#dfe3ed] to-[#EFEBC8]">
        <Bio />
        <Footer />
      </div>
    </main>
  );
}
