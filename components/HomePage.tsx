"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import CircularTextAnimation from "./CircularTextAnimation";
import { IntroAnimationText } from "./IntroAnimationText";
import { SideBar } from "./SideBar";
import MovingGallery from "./MovingGallery";
const HomePage = () => {
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
      <SideBar />
      <div className="grid w-full p-10">
        <div className="grid  grid-cols-12 w-full">
          <div className="flex col-span-3 flex-col">
            <CircularTextAnimation />
          </div>
          <div className="col-span-9 flex flex-col items-end">
            <IntroAnimationText />
          </div>
        </div>
        <div className="col-span-full overflow-hidden h-full">
          <MovingGallery />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
