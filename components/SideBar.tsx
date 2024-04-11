import Link from "next/link";
import React from "react";

export const SideBar = () => {
  return (
    <div className=" border-r-2 grow flex justify-center w-24">
      <div className="flex justify-around flex-col ">
        <Link href={"about"} className="-rotate-90 inline-flex">
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
  );
};
