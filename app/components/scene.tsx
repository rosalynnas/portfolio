"use client";

import { motion, LayoutGroup } from "framer-motion";
import Image from "next/image";
import TallTree from "/public/images/tall-tree-white.png";
import CirclesWhite from "/public/images/circles-white.png";
import Dots from "/public/images/dots-white.png";
import Logo from "/public/images/logo-white.png";
import {
  MoonOne,
  MoonTwo,
  MoonThree,
  MoonFour,
  MoonFive,
  RingSolid,
  RingThick,
  RingDotted,
  RingThin,
} from "/public/images/";

export function Scene() {
  return (
    <div className="h-[calc(100dvh-6rem)] max-h-[calc(100dvh-6rem)] overflow-x-clip relative grid place-items-center">
      <div className="absolute top-10 left-20">
        <Image src={Logo} alt="R.A." width={86} height={41} priority />
      </div>

      <Image
        src={RingDotted}
        alt="Add alt text.."
        width={250}
        height={250}
        className="absolute"
      />

      <motion.div
        className="absolute left-0 top-0"
        transition={{
          type: "spring",
        }}
      >
        <Image
          src={RingThin}
          alt="Add alt text.."
          width={300}
          height={300}
          className="absolute"
        />
        <Image
          src={MoonOne}
          alt="Add alt text.."
          width={25}
          height={25}
          className="absolute top-0 left-0 translate-x-50"
        />
      </motion.div>

      <div className="absolute bottom-0 left-10">
        <Image
          src={CirclesWhite}
          alt="Add alt text.."
          width={250}
          height={250}
        />
      </div>
      <div className="absolute bottom-5 bottom-5 lg:bottom-20 right-[12%]">
        <Image src={TallTree} alt="Add alt text.." width={150} height={300} />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2">
        <Image src={Dots} alt="Add alt text.." width={1200} height={300} />
      </div>
    </div>
  );
}
