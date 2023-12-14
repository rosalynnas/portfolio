"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "public/images/logo-white.png";
import TallTree from "public/images/tall-tree-white.png";
import Circles from "public/images/circles-white.png";
import CirclesAndLine from "public/images/circles-and-line.png";
import Dots from "public/images/dots-white.png";
import MoonOne from "public/images/moon-one.svg";
import MoonTwo from "public/images/moon-two.svg";
import MoonThree from "public/images/moon-three.svg";
import MoonFour from "public/images/moon-four.svg";
import MoonFive from "public/images/moon-five.svg";

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
      velocity: 0.01,
      dampening: 50,
      stiffness: 75,
      mass: 0.02 * diameter,
      delay: diameter * 0.004,
    },
  }),
  rotating: (diameter: number) => ({
    transform: "rotate(360deg)",
    transition: {
      transform: {
        delay: -100 / diameter + 2,
        type: "tween",
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
        type: "tween",
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
      duration: 8,
      ease: "anticipate",
    },
  },
};

export function Scene() {
  return (
    <div className="h-[100dvh] max-h-[100dvh] md:h-[calc(100dvh-6rem)] md:max-h-[calc(100dvh-6rem)] overflow-x-clip relative">
      <div className="h-full overflow-y-clip relative grid place-items-center">
        <motion.div
          className="absolute top-4 h-24 lg:h-32 flex left-4 lg:left-8 right-0 justify-between items-center"
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
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="w-32 h-full lg:w-44 relative">
            <Image
              src={CirclesAndLine}
              alt="text.."
              fill={true}
              className="object-contain object-right"
            />
            <motion.div
              className="h-3/5 w-3/5 absolute"
              initial={{
                top: "50%",
                left: "5%",
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

        <motion.div className="absolute top-20 left-1/2 -translate-x-1/2 md:top-0 h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] xl:h-[45rem] xl:w-[45rem] grid place-items-center -z-1">
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
              <circle
                cx="50"
                cy="50"
                r="49.5"
                stroke="white"
                strokeWidth="0.1"
              />
            </svg>
            <motion.div
              className="absolute top-1/2 left-[2px] -translate-x-1/2 -translate-y-1/2"
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
              <circle
                cx="50"
                cy="50"
                r="49.5"
                stroke="white"
                strokeWidth="0.1"
              />
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
              <circle
                cx="50"
                cy="50"
                r="49.5"
                stroke="white"
                strokeWidth="0.3"
              />
            </svg>
            <motion.div
              className="absolute top-1/2 left-[3px] -translate-x-1/2 -translate-y-1/2"
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
              className="absolute top-1/2 left-[2px] -translate-x-1/2 -translate-y-1/2"
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
              className="absolute top-1/2 left-[3px] -translate-x-1/2 -translate-y-1/2"
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
          <Image src={Circles} alt="text.." width={200} height={200} />
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
            quality={100}
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

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
          quality={100}
          priority
          className="object-cover object-right"
        />
      </motion.div>
    </div>
  );
}
