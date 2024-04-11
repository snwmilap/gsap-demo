"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import HomePage from "@/components/HomePage";
import SplaceScreen from "@/components/SplaceScreen";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  const onComplete = () => {
    setLoaded(!loaded)
  };

  return <>{loaded ? <SplaceScreen onComplete={onComplete} /> : <HomePage />}</>;
}
