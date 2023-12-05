"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Footerpage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white relative  top-36 dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 "
    >
      {" "}
      <div className="p-2 lg:mx-4">
        <div className="mx-auto py-6 max-w-md">
          <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
            Let’s work together.
          </h2>
          <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
            Creating user experience and visual appealing design
          </p>
        </div>
        <div className="flex items-center gap-x-4 justify-center">
          <div className="flex items-center gap-x-2 mt-2 ">
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
        <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Follow Me
              </h1>
            </div>

            <div className="flex gap-x-2">
              <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                <CiTwitter className="text-neutral-500 dark:text-white" />
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                <CiInstagram className="text-neutral-500 dark:text-white" />
              </div>{" "}
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
                <AiOutlineDribbble className="text-neutral-500 dark:text-white" />
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                <FaLinkedinIn className="text-neutral-500 dark:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
          <div className="text-center">
            <span className="text-neutral-700 dark:text-neutral-400">
              © 2023 All Right Reserved
            </span>
            <p className="text-neutral-500">
              By{" "}
              <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                Yatin Chaudhari
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footerpage;

{
  /* 

        <div className="flex items-center gap-x-4 justify-center mt-6">
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
      </div>

      <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-InterRe">
            <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
            <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
              Follow Me
            </h1>
          </div>

          <div className="flex gap-x-2">
            <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
              <CiTwitter className="text-neutral-500 dark:text-white" />
            </div>
            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
              <CiInstagram className="text-neutral-500 dark:text-white" />
            </div>{" "}
            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
              <AiOutlineDribbble className="text-neutral-500 dark:text-white" />
            </div>
            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
              <FaLinkedinIn className="text-neutral-500 dark:text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
        <div className="text-center">
          <span className="text-neutral-700 dark:text-neutral-400">
            © 2023 All Right Reserved
          </span>
          <p className="text-neutral-500">
            By{" "}
            <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
              Yatin Chaudhari
            </span>
          </p>
        </div>
      </div> */
}
