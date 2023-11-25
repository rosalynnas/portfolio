"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useTime } from "framer-motion";

import Image from "next/image";
import Logo from "public/images/logo-white.png";
import TallTree from "public/images/tall-tree-white.png";
import CirclesWhite from "public/images/circles-white.png";
import CirclesAndLine from "public/images/circles-and-line.svg";
import Dots from "public/images/dots-white.png";
import MoonOne from "public/images/moon-one.svg";
import MoonTwo from "public/images/moon-two.svg";
import MoonThree from "public/images/moon-three.svg";
import MoonFour from "public/images/moon-four.svg";
import MoonFive from "public/images/moon-five.svg";
import RingSolid from "public/images/ring-solid.svg";
import RingThick from "public/images/ring-thick.svg";
import RingDotted from "public/images/ring-dotted.svg";
import RingThin from "public/images/ring-thin.svg";

const ring = {
  hidden: { opacity: 0, height: 0, width: 0, transform: "rotate(0)" },
  visible: (diameter: number) => ({
    opacity: 1,
    width: `${diameter}rem`,
    height: `${diameter}rem`,
    transition: {
      type: "spring",
      delay: diameter * 0.01,
    },
  }),
  rotating: (diameter: number) => ({
    transform: "rotate(360deg)",
    transition: {
      transform: {
        type: "linear",
        duration: diameter * 2.5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }),
};

const moon = {
  hidden: {
    opacity: 0,
    height: 0,
    width: 0,
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%) rotate(0)",
  },
  visible: (diameter: number) => ({
    opacity: 1,
    height: `${diameter}rem`,
    width: `${diameter}rem`,
    transition: {
      type: "spring",
      delay: 2,
    },
  }),
  rotating: {
    transform: "translate(-50%, -50%) rotate(360deg)",
    transition: {
      delay: 2,
      transform: {
        type: "linear",
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

export function Scene() {
  return (
    <div className="h-[calc(100dvh-6rem)] max-h-[calc(100dvh-6rem)] overflow-x-clip relative grid place-items-center">
      <div className="absolute top-10 left-20">
        <Image src={Logo} alt="R.A." width={86} height={41} priority />
      </div>

      <motion.div className="absolute grid scale-1/2 place-items-center top-0 bottom-0 left-0 right-0 overflow-hidden -z-1">
        <motion.div
          className="absolute h-[10rem] w-[10rem]"
          variants={ring}
          key="ring1"
          custom={10}
          initial="hidden"
          animate="visible"
        >
          <Image src={RingDotted} alt="text.." fill={true} />
        </motion.div>

        <motion.div
          className="absolute h-[12rem] w-[12rem]"
          variants={ring}
          key="ring2"
          custom={12}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <Image src={RingThick} alt="text.." fill={true} />
          <motion.div
            className="absolute h-[1rem] w-[1rem]"
            variants={moon}
            initial="hidden"
            custom={1}
            animate={["visible"]}
          >
            <Image src={MoonTwo} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute h-[16rem] w-[16rem]"
          variants={ring}
          key="ring3"
          custom={16}
          initial="hidden"
          animate="visible"
        >
          <Image src={RingSolid} alt="text.." fill={true} />
        </motion.div>

        <motion.div
          className="absolute h-[17rem] w-[17rem]"
          variants={ring}
          key="ring4"
          custom={17}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <Image src={RingThick} alt="text.." fill={true} />
          <motion.div
            className="absolute h-[2rem] w-[2rem]"
            variants={moon}
            initial="hidden"
            custom={2}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonOne} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute h-[32rem] w-[32rem]"
          variants={ring}
          key="ring5"
          custom={32}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <Image src={RingSolid} alt="text.." fill={true} />
          <motion.div
            className="absolute h-[3rem] w-[3rem]"
            variants={moon}
            initial="hidden"
            custom={3}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonThree} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute h-[56rem] w-[56rem"
          variants={ring}
          key="ring6"
          custom={56}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <Image src={RingThin} alt="text.." fill={true} />
          <motion.div
            className="absolute h-[3rem] w-[3rem]"
            variants={moon}
            initial="hidden"
            custom={4}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonFive} alt="text.." fill={true} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-10">
        <Image src={CirclesWhite} alt="text.." width={250} height={250} />
      </div>
      <div className="absolute top-10 right-0">
        <Image src={CirclesAndLine} alt="text.." width={200} height={200} />
        <motion.div
          className="absolute h-[5rem] w-[5rem]"
          initial={{
            top: "50%",
            left: 0,
            y: "-50%",
            x: "-50%",
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            type: "spring",
            rotate: {
              duration: 5,
              repeat: Infinity,
            },
          }}
        >
          <Image src={MoonThree} alt="text.." fill={true} />
        </motion.div>
      </div>
      <div className="absolute bottom-5 lg:bottom-20 right-[12%]">
        <Image src={TallTree} alt="text.." width={150} height={300} />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2">
        <Image src={Dots} alt="text.." width={1200} height={300} />
      </div>
    </div>
  );
}
