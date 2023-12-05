/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer/footer";

import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineDribbble, AiOutlinePlusCircle } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const links = [
  {
    img: "/img/img1.png",
    title: "Rectangle",
    subtitle: ["Product design, Icon design"],
    icon: <BsChevronRight />,
    href: "/rectangle",
  },
  {
    img: "/img/wink.png",
    title: "Morva labs",
    subtitle: ["Visual design, Branding"],
    href: "/morvalabs",
  },
  {
    img: "/img/foot.png",
    title: "Simply",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/simply",
  },
];

function page() {
  return (
    <div className="bg-white top-28 relative dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 ">
      <div className=" lg:p-6 p-2 max-md:p-5 ">
        <div className="dark:bg-neutral-800 bg-[#F1F4F8] leading-8 rounded-lg p-4 flex gap-x-11">
          <div>
            <p>Project</p>
            <p>Technology Stack</p>
            <p>Role</p>
            <p>Year</p>
          </div>
          <div>
            <p> CrazyTV streaming Web App.</p>
            <p> Reactjs , Axios , Redux-Toolkit ,Scss.</p>
            <p> Design, coding, and testing </p>
            <p> 2023</p>
          </div>
        </div>

        <div className="px-4">
          <div className="drop-shadow-md  mt-8">
            <Image
              className="w-12 h-12 object-cover rounded-full "
              src="/img/crazytv.png"
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div>
            <h1 className="text-4xl font-InterBo my-5 xs:text-xl">
              CrazyTV - streaming Web Application .
            </h1>
            <p className="text-lg dark:text-neutral-300  text-neutral-900">
              Purpose : Development of CrazyTV Streaming, a comprehensive
              application for seamless movie information retrieval and browsing.
              Where user can see the trailer of every Trending Movies, Series,
              Tv Shows etc.
            </p>
            <Link href={"https://crazytv-hd.vercel.app/"}>
              <div className="border-neutral-300 mt-5 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-full h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  Visit Site
                </button>

                <FiArrowRight className="text-neutral-500" />
              </div>
            </Link>

            <div className="mt-8">
              <Image
                className="aspect-square rounded-lg"
                src="/img/landing_page_crazytv.png"
                alt=""
                width={1024}
                height={300} // or objectFit="contain"
              />
              <p className="my-5 text-lg dark:text-neutral-300  text-neutral-900">
                Key Points Learned From Project : - React for build - Redux for
                UI - state management SCSS for styling - Axios for API requests
                to the TMDB API , - Firebase. - React Router for navigation and
                routing within the application .
              </p>

              <h3 className="text-lg my-6 font-InterBo">
                The Problems to Solve
              </h3>
              <ol className="text-lg dark:text-neutral-300  text-neutral-900 text-decoration">
                <li>
                  {" "}
                  Redux Toolkit (@reduxjs/toolkit): A comprehensive toolset for
                  managing application state with Redux, streamlining state
                  management and reducing boilerplate code.
                </li>{" "}
                <li>
                  Axios (axios): A reliable and efficient HTTP client that
                  seamlessly integrates with the TMDB API, enabling smooth data
                  retrieval.
                </li>
                <li>
                  Day.js (dayjs): A lightweight and versatile library for date
                  and time manipulation, enhancing the application's date
                  formatting capabilities.
                </li>
                <li>
                  React (react) and React DOM (react-dom): The core libraries
                  powering the dynamic user interface and rendering of React
                  components.
                </li>
                <li>
                  React Circular Progressbar (react-circular-progressbar): An
                  eye-catching component that brings visually appealing circular
                  progress bars to the application.
                </li>
                <li>
                  React Icons (react-icons): A treasure trove of icons that adds
                  visual charm and enhances the user interface with diverse
                  iconography.
                </li>
                <li>
                  React Infinite Scroll Component
                  (react-infinite-scroll-component): Empowers infinite scrolling
                  functionality, making content loading seamless and intuitive.
                </li>
                <li>
                  React Lazy Load Image Component
                  (react-lazy-load-image-component): Enhances performance by
                  deferring image loading until needed, improving page loading
                  times.
                </li>
                <li>
                  React Player (react-player): Facilitates smooth integration of
                  media players to showcase movie trailers and videos within the
                  application.
                </li>
                <li>
                  React Redux (react-redux): Seamlessly integrates Redux state
                  management with React, providing predictable application state
                  handling.
                </li>
                <li>
                  React Router DOM (react-router-dom): Enables smooth and
                  intuitive navigation and routing within the application. React
                  Select (react-select): Provides customizable select dropdowns
                  for better user interaction and search functionalities.
                </li>
                <li>
                  Sass (sass): A powerful CSS preprocessor that streamlines and
                  organizes styling, contributing to the overall visual
                  aesthetics of the application.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#F6F8FA] mt-11 dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Other Project Work
                </h1>
              </div>

              <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md max-sm:flex-col flex items-center gap-x-1 ">
                <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                  View All
                </button>
                <FiArrowRight className="text-neutral-500" />
              </div>
            </div>
            <div className="mt-6">
              <div className="cursor-pointer">
                {links.map((link, indx) => (
                  <div
                    key={link.href}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                        <div className="drop-shadow-md">
                          <Image
                            className="w-10 h-10 object-cover rounded-full "
                            src={link.img}
                            alt=""
                            width={300}
                            height={300}
                          />
                        </div>

                        <div className="max-md:mt-5">
                          <h1 className="text-xl font-InterMe ">
                            {link.title}
                          </h1>
                          <p className="text-lg text-neutral-400 max-md:my-1">
                            {link.subtitle.map((subt) => (
                              <span key={subt}>{subt}</span>
                            ))}
                          </p>
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
        </div>

        <div className="mt-24 p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Let’s work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>

            <div className="">
              <div className="flex items-center gap-x-4 justify-center mt-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
