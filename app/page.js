/* eslint-disable react/no-unescaped-entities */

"use client";
import Footer from "./Footer/footer";

import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import useSWR from "swr";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { projects } from "../data/data";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-28 relative dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 "
      >
        <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
                >
                  Frontend Developer
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                  <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                    Available for work
                  </p>
                </div>
              </Link>
            </div>

            <div className="  flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className=" sm:text-4xl text-neutral-700 font-InterBo dark:text-white xs:text-3xl">
                  I'm Yatin Chaudhari
                </h1>

                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="  text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >
                  Software developer from Kalyan, Maharashtra. <br /> Currently
                  working at Newton School Trainee{" "}
                </motion.p>

                <div className="flex items-center gap-x-2 mt-6 ">
                  <Link href={"https://www.linkedin.com/in/c-yatin727/"}>
                    <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                      <span className="text-white  font-semibold">
                        <FaLinkedin />
                      </span>
                    </div>
                  </Link>
                  <Link href={"https://github.com/YatinDevs"}>
                    <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                      <span className="text-white  font-semibold">
                        <FaGithub />
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={
                      "https://drive.google.com/file/d/1c0I2v8Rb9FrKZpN35UdFmWr8YtA1YyEq/view"
                    }
                  >
                    <div className="border-neutral-300 dark:border-neutral-700/50 shadow-md border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                      <FiCopy className="" />
                      <span className="text-neutral-700 dark:text-white  font-semibold">
                        Copy Resume
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="border text-center flex md:justify-center border-neutral-200 dark:border-neutral-700 dark:bg-[#2C2C2C] w-fit md:order-1 order-1 rounded-full p-3 ">
                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-32 h-32 flex object-cover   rounded-full "
                  src="/img/pro.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-x-2 font-InterRe">
                  <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                    Projects
                  </h1>
                </div>

                <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex items-center gap-x-1 ">
                  <Link href={"/project"}>
                    <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                      More Projects
                    </button>
                  </Link>
                  <FiArrowRight className="text-neutral-500" />
                </div>
              </div>
              <div className="mt-6">
                <div className="cursor-pointer">
                  {projects.map((project) => (
                    <div
                      key={project.img}
                      className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                    >
                      <Link href={project.href}>
                        <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                          <div className="drop-shadow-md">
                            <motion.img
                              className="w-10 h-10 object-cover rounded-full "
                              src={project.img}
                              alt=""
                            />
                          </div>

                          <div className="max-md:mt-5">
                            <h1 className="text-xl font-InterMe ">
                              {project.title}
                            </h1>
                            <div className="text-lg text-neutral-400 max-md:my-1">
                              {project.subtitle.map((subt) => (
                                <span key={subt}>{subt}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="max-md:hidden md:block">
                        <BsChevronRight />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 mt-3 max-md:p-3 rounded-xl">
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-x-2 font-InterRe">
                  <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                    Skill Set
                  </h1>
                </div>

                <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex items-center gap-x-1 ">
                  <Link href={"/about"}>
                    <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                      About Me
                    </button>
                  </Link>

                  <FiArrowRight className="text-neutral-500" />
                </div>
              </div>
              <div>
                <Skill />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// <div className="mt-6">
//                 <div className="cursor-pointer">
//                   <h1

//                   >
//                     Days I <strong className="yellow">Code</strong>
//                   </h1>
//                   <GitHubCalendar
//                     username="YatinDevs"
//                     blockSize={12}
//                     blockMargin={5}
//                     color="#6102ce"
//                     fontSize={16}
//                   />
//                 </div>
//               </div>
