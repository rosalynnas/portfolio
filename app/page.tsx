"use client";

import { Scene } from "./components/scene";
import { Bio } from "./components/bio";
import { Footer } from "./components/footer";

import { motion } from "framer-motion";

const background = {
  night: {
    background: "linear-gradient(180deg, #091334 10%, #8797C8 100%)",
  },
  day: {
    background: "linear-gradient(180deg, #8797c8 0%, #cdd2e0 100%)",
    transition: {
      type: "tween",
      delay: 2,
      duration: 4,
      ease: "easeIn",
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
      delay: 2,
      duration: 5,
      ease: "easeOut",
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

//   {/* <svg className="w-100 h-100">
//   <motion.linearGradient
//     id="myGradient"
//     animate={{
//       gradientTransform: `rotate(4)`,
//     }}
//   >
//     <stop offset="5%" stop-color="blue" />
//     <stop offset="95%" stop-color="red" />
//   </motion.linearGradient>
// </svg> */}

// const background = {
//   night: {
//     // background: "linear-gradient(180deg, #091334 10%, #8797C8 100%)",
//   },
//   day: {
//     // background: "linear-gradient(180deg, #8797c8 0%, #cdd2e0 100%);",
//     // transition: {
//     //   type: "spring",
//     //   duration: 5,
//     // },
//   },
// };

// const foreground = {
//   night: {
//     // filter: "brightness(0%)",
//   },
//   day: {
//     // filter: "brightness(100%)",
//     // transition: {
//     //   type: "tween",
//     //   delay: 2,
//     //   duration: 5,
//     //   ease: "easeIn",
//     // },
//   },
// };
