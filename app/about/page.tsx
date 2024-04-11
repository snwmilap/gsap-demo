"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArcText from "../../public/ArcText.svg";
import Image from "next/image";
import Link from "next/link";
const AboutPage = () => {
  useGSAP(() => {
    var tl = gsap.timeline({});
    tl.to(".text1", {
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      opacity: 1,
    }).to(
      ".text2",
      {
        opacity: 1,
        stagger: 0.2,
      },
      "-=0.5"
    );
  });

  return (
    <main className="flex min-h-screen relative gap-6">
      <div className=" border-r-2 grow flex justify-center w-24">
        <div className="flex justify-around flex-col ">
          <Link href={"#"} className="-rotate-90 inline-flex">
            About
          </Link>
          <Link href={"#"} className="-rotate-90 inline-flex">
            Projects
          </Link>{" "}
          <Link href={"#"} className="-rotate-90 inline-flex">
            Contact
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full p-10">
        <div className="flex col-span-3 flex-col">
          <Image src={ArcText} alt="" />
        </div>
        <div className="col-span-9 flex flex-col items-end">
          <div className="text-[168px] leading-none overflow-hidden">
            <span className="text1 block opacity-0 translate-y-40">
              ANTHONY
            </span>
          </div>
          <div className="flex right-60 relative">
            <div className="text-[168px] text2 leading-none relative overflow-hidden">
              <span className="text1 block opacity-0 translate-y-40">
                AMBROSE
              </span>
            </div>
            <div className="mt-4">
              <div className="text2 opacity-0">Photographer</div>
              <div className="text2 opacity-0">Videographer</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
