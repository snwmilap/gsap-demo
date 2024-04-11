"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP);

const PageTransition = () => {
  const activePath = usePathname();

  // Use useGSAP with a dependency on activePath to trigger animation when the path changes
  useGSAP(() => {
    var tl = gsap.timeline({});
    tl.fromTo(
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
    ).to(".loader", {
      scaleX: 0, // Initial scale (0 means fully collapsed)
      transformOrigin: "right", // Set the transform origin to the left side
    });
  }, [activePath]); // Dependency array with activePath

  return (
    <div className="loader fixed top-0 left-0 w-full h-full bg-[#252525] z-50"></div>
  );
};
export default PageTransition;
