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
import MoonFour from "public/images/mooon-four.svg";
import MoonFive from "public/images/moon-five.svg";
import RingSolid from "public/images/ring-solid.svg";
import RingThick from "public/images/ring-thick.svg";
import RingDotted from "public/images/ring-dotted.svg";
import RingThin from "public/images/ring-thin.svg";

export function Scene() {
  return (
    <div className="h-[calc(100dvh-6rem)] max-h-[calc(100dvh-6rem)] overflow-x-clip relative grid place-items-center">
      <div className="absolute top-10 left-20">
        <Image src={Logo} alt="R.A." width={86} height={41} priority />
      </div>

      <div className="absolute grid place-items-center top-0 bottom-0 left-0 right-0 overflow-hidden -z-1">
        <motion.div
          className="absolute"
          initial={{ height: "0rem", width: "0rem" }}
          animate={{ height: "10rem", width: "10rem" }}
          transition={{
            type: "spring",
          }}
        >
          <Image src={RingDotted} alt="text.." fill={true} />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ height: "10rem", width: "10rem", opacity: 0 }}
          animate={{
            height: "12rem",
            width: "12rem",
            transform: "rotate(360deg)",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 2,
            transform: {
              type: "linear",
              duration: 18,
              delay: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image src={RingThick} alt="text.." fill={true} />
          <motion.div
            className="absolute"
            initial={{
              height: 0,
              width: 0,
              top: 0,
              left: "50%",
              y: "-50%",
              x: "-50%",
            }}
            animate={{ height: "1rem", width: "1rem" }}
            transition={{
              type: "spring",
              delay: 2,
            }}
          >
            <Image src={MoonTwo} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ height: "10rem", width: "10rem", opacity: 0 }}
          animate={{ height: "16rem", width: "16rem", opacity: 1 }}
          transition={{
            type: "spring",
            duration: 3,
          }}
        >
          <Image src={RingSolid} alt="text.." fill={true} />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ height: "10rem", width: "10rem", opacity: 0 }}
          animate={{
            height: "17rem",
            width: "17rem",
            transform: "rotate(360deg)",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 4,
            transform: {
              type: "linear",
              duration: 18,
              delay: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image src={RingThick} alt="text.." fill={true} />
          <motion.div
            className="absolute"
            initial={{
              height: 0,
              width: 0,
              top: "50%",
              left: 0,
              y: "-50%",
              x: "-50%",
            }}
            animate={{ height: "3rem", width: "3rem" }}
            transition={{
              type: "spring",
              delay: 2,
            }}
          >
            <Image src={MoonOne} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ height: "10rem", width: "10rem", opacity: 0 }}
          animate={{
            height: "26rem",
            width: "26rem",
            transform: "rotate(360deg)",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 5,
            transform: {
              type: "linear",
              duration: 18,
              delay: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image src={RingSolid} alt="text.." fill={true} />
          <motion.div
            className="absolute"
            initial={{
              height: 0,
              width: 0,
              top: "50%",
              right: 0,
              y: "-50%",
              x: "50%",
            }}
            animate={{ height: "3rem", width: "3rem" }}
            transition={{
              type: "spring",
              delay: 2,
            }}
          >
            <Image src={MoonThree} alt="text.." fill={true} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ height: "10rem", width: "10rem", opacity: 0 }}
          animate={{
            height: "48rem",
            width: "48rem",
            transform: "rotate(360deg)",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 6,
            transform: {
              type: "linear",
              duration: 18,
              delay: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image src={RingThin} alt="text.." fill={true} />
          <motion.div
            className="absolute"
            initial={{
              height: 0,
              width: 0,
              top: "50%",
              left: 0,
              y: "-50%",
              x: "-50%",
            }}
            animate={{
              height: "3rem",
              width: "3rem",
            }}
            transition={{
              type: "spring",
              delay: 2,
            }}
          >
            <Image src={MoonFive} alt="text.." fill={true} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-10">
        <Image src={CirclesWhite} alt="text.." width={250} height={250} />
      </div>
      <div className="absolute top-10 right-0">
        <Image src={CirclesAndLine} alt="text.." width={200} height={200} />
        <motion.div
          className="absolute"
          initial={{
            height: "3rem",
            width: "3rem",
            top: "50%",
            left: 0,
            y: "-50%",
            x: "-50%",
            rotate: 0,
          }}
          animate={{
            height: "5rem",
            width: "5rem",
            rotate: 360,
          }}
          transition={{
            type: "spring",
            delay: 3,
            rotate: {
              type: "linear",
              duration: 5,
              repeat: Infinity,
              ease: "linear",
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
