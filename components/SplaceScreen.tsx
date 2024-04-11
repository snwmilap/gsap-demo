"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IntroAnimationText } from "./IntroAnimationText";

gsap.registerPlugin(useGSAP);
interface SplaceScreenProps {
  onComplete: () => void;
}

const SplaceScreen: React.FC<SplaceScreenProps> = ({ onComplete }) => {
  useGSAP(() => {
    var tl = gsap.timeline({});
    tl.to(".text1", {
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
      opacity: 1,
    })
      .to(
        ".text2",
        {
          opacity: 1,
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        ".loader",
        {
          scaleX: 0, // Initial scale (0 means fully collapsed)
          transformOrigin: "left", // Set the transform origin to the left side
        },
        {
          scaleX: 1, // Final scale (1 means full size)
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "power4.out", // Easing function
        }
      )
      .to(".splace-screen", {
        opacity: 0,
      })
      .to(".loader", {
        scaleX: 0, // Initial scale (0 means fully collapsed)
        transformOrigin: "right", // Set the transform origin to the left side
        onComplete: onComplete, // Set loaded to false after animation completes
      });
  });

  return (
    <main className="flex min-h-screen justify-end items-end flex-col overflow-hidden relative">
      <div className="loader absolute top-0 left-0 w-full h-full bg-[#252525] z-50"></div>
      <div className="splace-screen">
        <IntroAnimationText />
      </div>
    </main>
  );
};
export default SplaceScreen;
