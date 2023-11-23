import Image from "next/image";
import ShortTree from "/public/images/short-tree-black.png";
import CirclesBlack from "/public/images/circles-black.png";

export function Footer() {
  return (
    <div className="mx-20 flex items-end justify-between">
      <div className="mb-20">
        <div className="mb-5 -ms-1">
          <Image
            className="invert"
            src="/images/logo.svg"
            alt="R.A."
            width={86}
            height={41}
          />
        </div>
        <p>Rosalynn Ashwood</p>
        <p>hello@rosalynnas.com</p>
        <p>+1 418 262 9406</p>
      </div>
      <Image
        src={ShortTree}
        alt="Tall white tree design"
        width={100}
        height={100}
      />
      <div className="mb-20">
        <p className="mb-5">Find me on </p>
        <p>
          <a className="underline" href="#">
            GitHub
          </a>
        </p>
        <p>
          <a className="underline" href="#">
            LinkedIn
          </a>
        </p>
      </div>
      <Image
        className="object-contain"
        src={CirclesBlack}
        alt="Tall white tree design"
        width={250}
        height={250}
      />
    </div>
  );
}
