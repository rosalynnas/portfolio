"use client";

import { Scene } from "./components/scene";
import { Bio } from "./components/bio";
import { Footer } from "./components/footer";

import { motion } from "framer-motion";

const background = {
  night: {
    background: "linear-gradient(180deg, #1A2243 10%, #987E66 100%)",
  },
  day: {
    background: "linear-gradient(180deg, #90A0D3 0%, #cdd2e0 100%)",
    transition: {
      type: "tween",
      delay: 0,
      duration: 16,
      ease: "anticipate",
    },
  },
};

const foreground = {
  night: {
    background: "linear-gradient(180deg, #070809 10%, #8797C8 100%)",
  },
  day: {
    background: "linear-gradient(180deg, #dfe3ed 0%, #EFEBC8 100%)",
    transition: {
      type: "tween",
      delay: 2.26,
      duration: 10,
      ease: "anticipate",
    },
  },
};

export default function Home() {
  return (
    <main>
      <motion.div variants={background} initial="night" animate="day">
        <Scene />
        <motion.div variants={foreground} initial="night" animate="day">
          <Bio />
          <Footer />
        </motion.div>
      </motion.div>
    </main>
  );
}
