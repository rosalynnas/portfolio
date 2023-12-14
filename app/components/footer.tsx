import { motion } from "framer-motion";

import Image from "next/image";
import Logo from "/public/images/logo.png";
import ShortTree from "/public/images/short-tree-black.png";
import Circles from "/public/images/circles-black.png";

const foreground = {
  night: {
    filter: "brightness(20%) contrast(140%)",
  },
  day: {
    filter: "brightness(100%) contrast(100%)",
    transition: {
      type: "tween",
      delay: 2,
      duration: 10,
      ease: "anticipate",
    },
  },
};

export function Footer() {
  return (
    <div className="footer relative w-4/5 pb-20 lg:w-auto lg:p-20 mx-auto leading-relaxed text-blue-950">
      <motion.div variants={foreground} initial="night" animate="day">
        <Image
          className="absolute bottom-0 left-48 lg:left-80 lg:w-20"
          src={ShortTree}
          alt="text.."
          width={130}
          height={130}
        />
      </motion.div>
      <Image
        className="absolute bottom-0 right-0 w-1/3 lg:w-72 lg:right-8"
        src={Circles}
        alt="text.."
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Image src={Logo} alt="R.A." width={80} height={40} quality={100} />
          <p className="mt-5">Rosalynn Ashwood</p>
          <p>hello@rosalynnas.com</p>
          <p>+1 418 262 9406</p>
        </div>
        <div>
          <p className="mb-5">Find me on </p>
          <p>
            <a className="underline" href="https://github.com/rosalynnas">
              GitHub
            </a>
          </p>
          <p>
            <a
              className="underline"
              href="https://www.linkedin.com/in/rosalynnas/"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
