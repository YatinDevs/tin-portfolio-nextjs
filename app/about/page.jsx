/* eslint-disable react/no-unescaped-entities */

"use client";
import Footer from "../Footer/footer";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/img/pizza.png",
    title: "Goven",
    subtitle: "framer template",
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Upshifts",
    subtitle: "Web design collections",
  },
  {
    img: "/img/foot.png",
    title: "Subtle Folio",
    subtitle: "framer template",
  },
];

function page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-28 relative dark:bg-[#212121] py-4 shadow-lg rounded-xl  lg:max-w-5xl lg:mx-auto md:mx-auto md:max-w-[760px] sm:max-w-[525px] xs:max-w-[412px] xxs:max-w-[356px] xxs:mx-auto"
    >
      <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 max-md:p-3 mx-3 rounded-xl">
        <div className=" lg:p-6 p-5">
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
                    "https://drive.google.com/file/d/1vu_2Cb3BbndXsRdJXiI6s5imm9XxADo8/view"
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
        <div className="flex items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-2xl font-InterMe">
            About Me
          </h1>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          className="text-neutral-700 dark:bg-[#212121] rounded-xl xxs:text-lg text-2xl my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
        >
          <div className="p-2 rounded-xl m-2">
            <h3 className="p-3 mb-3 text-3xl font-extrabold  bg-white-700 rounded-md m-2">
              Why Software Engineer Role?
            </h3>
            So little About My Software Engineering Career Transition. Long
            Story Short I was always into computers But Lockdown help me Explore
            More into it.{" "}
            <span className=" text-yellow-400 font-extrabold">
              Journey From eSports to Crypto to Web Developement.
            </span>{" "}
            <br></br>I Am{" "}
            <span className=" text-yellow-400 font-extrabold">
              persistent learner{" "}
            </span>{" "}
            and{" "}
            <span className=" text-yellow-400 font-extrabold">
              {" "}
              love to explore new technologies.
            </span>{" "}
            So I decided to make Career Transition from Civil Engineering to Web
            Developement / Software Engineer Role. By Joining CDAC-Noida{" "}
            <span className=" text-yellow-400 font-extrabold">
              {" "}
              "Centre for Development of Advanced Computing (C-DAC) ".
            </span>
          </div>

          <div className="p-2rounded-xl m-2">
            Eventually I Learned Full Stack Java Developement. The Course Was
            Bombardment of Software Developement INFORMATION:
            <p className=" text-yellow-400 font-extrabold">Got Insight of :</p>
            <p className=" text-yellow-400 font-extrabold">
              J2SE: Core Java, Web Fundamentals.
            </p>
            <p className=" text-yellow-400 font-extrabold">
              J2EE: JSP, ORM, JDBC, SPRING FRAME WORK, SPRING BOOT.
            </p>
            <p className=" text-yellow-400 font-extrabold">
              Database : MYSQL,MONGODB. AWS Basics
            </p>
            <p className=" text-yellow-400 font-extrabold">
              DevOps Tools : Aglie Tools - Jira , PostMan : Testing
            </p>
            <p className=" text-yellow-400 font-extrabold">
              And At Last ReactJS ,NodeJS ,ExpressJs{" "}
            </p>
          </div>

          <p className="p-2 rounded-xl m-2">
            I got a particular interest in{" "}
            <span className=" text-yellow-400 font-extrabold">
              MERN development, and Javascript. AS for Now I AM handsON in MERN
              Developement, Database .
            </span>{" "}
            Further My Plans are :
          </p>
          <p className="p-2rounded-xl m-2 text-blue-200 font-extrabold">
            I’m currently learning NextJs and TypeScript.😬. I’m looking forward
            to learn AWS(S3, EC2, and Lambda) and React Native(for mobile
            development).
            <br></br>
            <span className=" text-yellow-400">
              Goals: Learn and contribute to Open Source projects and Become
              Confident Full Stack Developer.
            </span>
          </p>
        </motion.div>
        <div className="p-4 xxs:p-1 rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="aspect-square object-center rounded-xl h-[400px] w-full xxs:h-[200px]"
            src="/img/bg-pc.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default page;

// <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
//           <motion.img
//             initial={{ y: 100, opacity: 0 }}
//             animate={{
//               y: 0,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.3 },
//             }}
//             className="aspect-square object-cover rounded-lg"
//             src="/img/img1.png"
//             alt=""
//           />
//         </div>

//         <div>
//           <motion.h1
//             initial={{ scale: 0, opacity: 0 }}
//             whileInView={{
//               scale: 1,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.5 },
//             }}
//             className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
//           >
//             More About Me
//           </motion.h1>

//           <motion.p
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{
//               y: 0,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.5 },
//             }}
//             className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
//           >
//             Joscript holds a bachelor's degree in Software Engineering from a
//             prestigious university in the United States and has a relentless
//             drive for staying up-to-date with the latest technologies and design
//             trends. Actively involved in the design community, Brian regularly
//             participates in diverse design conferences and meetups.
//           </motion.p>

//           <motion.p
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{
//               y: 0,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.5 },
//             }}
//             className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
//           >
//             When he's not immersed in design work, he finds solace in playing
//             the guitar and exploring new coffee shops in his local area. Brian
//             firmly believes in maintaining a healthy work-life balance, making
//             sure to take breaks and reenergize his creativity. In his spare
//             time, he also volunteers at a local animal shelter on weekends.
//           </motion.p>

//           <motion.h1
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{
//               x: 0,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.5 },
//             }}
//             className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
//           >
//             My Side Projects
//           </motion.h1>
//           <motion.p
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{
//               y: 0,
//               opacity: 1,
//               transition: { duration: 0.4, delay: 0.5 },
//             }}
//             className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
//           >
//             I did passion side projects in the weekend, please take a look you
//             will love it (i hope).
//           </motion.p>
//         </div>

//         <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-4  mt-6 rounded-md">
//           <div className="">
//             <Link href={"/"}>
//               {projects.map((link) => (
//                 <div
//                   key={link.subtitle}
//                   className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
//                 >
//                   <div className="flex  items-center gap-x-4">
//                     <div className="drop-shadow-md ">
//                       <Image
//                         className="w-10 h-10 object-cover rounded-full "
//                         src={link.img}
//                         alt=""
//                         width={100}
//                         height={100}
//                       />
//                     </div>

//                     <div>
//                       <h1 className="text-xl font-InterMe">{link.title}</h1>
//                     </div>
//                   </div>

//                   <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
//                     <p className="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
//                       {link.subtitle}
//                     </p>
//                     <div className="">
//                       <CiLocationArrow1 className="dark:text-neutral-400" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Link>
//           </div>
//         </div>
