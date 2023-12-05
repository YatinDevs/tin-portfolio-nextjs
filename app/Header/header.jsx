"use client";
// Icons
import {
  BsMoon,
  BsSun,
  AiOutlinePlusCircle,
  PiLaptopThin,
  PiUserLight,
  PiBagSimpleLight,
  PiHouseSimpleThin,
} from "./index";
// framer-motion
import { motion } from "framer-motion";

// React
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

let icons = [
  { icons: <PiHouseSimpleThin />, path: "/" },
  { icons: <PiUserLight />, path: "/about" },
  { icons: <PiLaptopThin />, path: "/project" },
  { icons: <PiBagSimpleLight />, path: "/education" },
];

function Headpage() {
  const pathname = usePathname() || "";
  // console.log(pathname);
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full z-30  ">
      <div className="py-6 rounded-lg  lg:max-w-5xl lg:mx-auto md:mx-auto md:max-w-[760px] sm:max-w-[525px] xs:max-w-[412px] xxs:max-w-[412px] xxs:mx-auto">
        <div className="flex  items-center justify-between shadow-md bg-white  dark:bg-[#212121] dark:border-neutral-700/30 border rounded-xl p-3 ">
          <div className="flex space-x-3 items-center">
            {icons.map((icon) => {
              const isActive = icon.path === pathname;

              return (
                <Link
                  data-active={isActive}
                  key={icon.path}
                  href={icon.path}
                  onMouseOver={() => setHoveredPath(icon.path)}
                  className={`px-1 py-1 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${
                    isActive ? "text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  <span
                    className={`text-gray-400  dark:text-neutral-500 sm:text-3xl xs:text-2xl xxs:text-xl relative z-20  ${
                      icon.path === hoveredPath &&
                      "text-neutral-800 transition-all ease-in-out duration-500 "
                    } `}
                  >
                    {icon.icons}
                  </span>

                  {icon.path === hoveredPath && (
                    <motion.div
                      // -z-10
                      className="absolute bottom-0  z-10 left-0 h-full bg-stone-300 dark:bg-neutral-700  rounded-full "
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-3 xxs:mx-5">
            <div
              onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
              className="cursor-pointer"
            >
              {theme == "dark" ? (
                <BsSun />
              ) : (
                <BsMoon className="dark:text-neutral-700" />
              )}
            </div>

            <Link href={"/contact"}>
              <div className="bg-black dark:bg-[#373737] px-2 rounded-md flex items-center gap-x-2 py-2 mx-2">
                <AiOutlinePlusCircle className="text-white " />
                <span className="text-white  font-semibold xs:text-xs sm:text-lg xxs:text-md">
                  Hire Me
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headpage;
