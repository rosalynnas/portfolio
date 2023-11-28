"use client";

import { motion, LayoutGroup } from "framer-motion";

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
  hidden: (diameter: number) => ({
    opacity: 0,
    height: 0,
    width: 0,
    transform: `rotate(0deg)`,
  }),
  visible: (diameter: number) => ({
    opacity: 1,
    width: `${diameter}%`,
    height: `${diameter}%`,
    transition: {
      type: "spring",
      delay: diameter * 0.009,
    },
  }),
  rotating: (diameter: number) => ({
    transform: "rotate(360deg)",
    transition: {
      transform: {
        delay: -100 / diameter,
        type: "linear",
        duration: (diameter + 3) / 3,
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
    transform: "translate(-50%, -50%) rotate(0)",
  },
  visible: (diameter: number) => ({
    opacity: 1,
    height: `${diameter}%`,
    width: `${diameter}%`,
    transition: {
      type: "spring",
      delay: 2,
      duration: 2,
    },
  }),
  rotating: {
    transform: "translate(-50%, -50%) rotate(360deg)",
    transition: {
      delay: 4,
      transform: {
        type: "linear",
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

const foreground = {
  night: {
    filter: "brightness(20%) contrast(140%)",
  },
  day: {
    filter: "brightness(100%) contrast(100%)",
    transition: {
      type: "tween",
      delay: 2,
      duration: 5,
      ease: "easeOut",
    },
  },
};

export function Scene() {
  return (
    <motion.div className="h-[100dvh] max-h-[100dvh] md:h-[calc(100dvh-6rem)] md:max-h-[calc(100dvh-6rem)] overflow-x-clip relative grid place-items-center">
      <motion.div
        className="absolute top-0 h-20 lg:h-32 flex left-4 lg:left-8 right-0 justify-between items-center"
        variants={foreground}
        initial="night"
        animate="day"
      >
        <div className="w-16 h-8 lg:w-auto lg:h-auto">
          <Image
            src={Logo}
            alt="R.A."
            width={86}
            height={41}
            className="object-contain"
          />
        </div>
        <div className="w-20 h-full lg:w-32 relative">
          <Image
            src={CirclesAndLine}
            alt="text.."
            fill={true}
            className="object-contain"
          />
          <motion.div
            className="h-1/2 w-1/2 absolute"
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
      </motion.div>

      <motion.div className="absolute h-2/3 top-20 left-1/2 -translate-x-1/2 w-full md:top-0 xl:h-[45rem] xl:w-[45rem] grid place-items-center -z-1 overflow-y-clip">
        <motion.div
          className="absolute"
          variants={ring}
          custom={22}
          initial="hidden"
          animate="visible"
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="49.5"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="0 2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute"
          variants={ring}
          custom={30}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="49.5" stroke="white" strokeWidth="0.1" />
          </svg>
          <motion.div
            className="absolute top-[2px] left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={moon}
            initial="hidden"
            custom={10}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonTwo} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          variants={ring}
          custom={38}
          initial="hidden"
          animate="visible"
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="49.5" stroke="white" strokeWidth="0.1" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute"
          variants={ring}
          custom={40}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="49.5" stroke="white" strokeWidth="0.3" />
          </svg>
          <motion.div
            className="absolute top-[3px] left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={moon}
            initial="hidden"
            custom={10}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonFour} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          variants={ring}
          custom={75}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="49.5"
              stroke="white"
              strokeWidth="0.05"
            />
          </svg>
          <motion.div
            className="absolute top-[2px] left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={moon}
            initial="hidden"
            custom={6}
            animate={["visible", "rotating"]}
          >
            <Image src={MoonFive} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          variants={ring}
          custom={110}
          initial="hidden"
          animate={["visible", "rotating"]}
        >
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="49.5"
              stroke="white"
              strokeWidth="0.15"
              strokeDasharray="0 0.5"
              strokeLinecap="round"
            />
          </svg>
          <motion.div
            className="absolute top-[3px] left-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={moon}
            initial="hidden"
            custom={6}
            animate="visible"
          >
            <Image src={MoonOne} alt="text.." fill={true} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute hidden -bottom-1 left-20 xl:block"
        variants={foreground}
        initial="night"
        animate="day"
      >
        <Image src={CirclesWhite} alt="text.." width={250} height={250} />
      </motion.div>
      <motion.div
        className="absolute bottom-5 lg:bottom-16 right-[8%] md:right-[12%] w-32 md:w-auto"
        variants={foreground}
        initial="night"
        animate="day"
      >
        <Image
          src={TallTree}
          alt="text.."
          width={160}
          height={300}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 translate-y-1/2 w-full md:w-auto"
        variants={foreground}
        initial="night"
        animate="day"
      >
        <Image
          src={Dots}
          alt="text.."
          width="1000"
          height="300"
          className="object-cover object-left"
        />
      </motion.div>
    </motion.div>
  );
}
