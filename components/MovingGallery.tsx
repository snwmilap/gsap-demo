import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MovingGallery = () => {
  const containerWidth = useRef<number | null>(null);
  if (typeof window !== "undefined") {
    containerWidth.current = window.innerWidth;
  }
  const animation = () => {
    gsap.to(".moving-gallery__slide", {
      duration: 30,
      x: -0.5 * (containerWidth.current ?? 0), // Adjusted to negative half of the container width
      ease: "none",
      repeat: -1,
    });
  };

  useGSAP(animation);

  return (
    <div className="moving-gallery__wrapper flex gap-5 items-center justify-start relative h-full">
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/255/600/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/200/440/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/450/400/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/320/600/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/621/220/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/321/520/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/180/310/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/721/220/" alt="" />
      </div>
      <div className="moving-gallery__slide w-full">
        <img src="https://picsum.photos/250/400/" alt="" />
      </div>
    </div>
  );
};

export default MovingGallery;
