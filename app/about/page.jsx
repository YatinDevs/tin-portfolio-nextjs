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
      className="bg-white top-28 relative dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 "
    >
      <div className=" lg:p-6 p-5 ">
        <div className="flex mt-4 items-center gap-x-2 font-InterRe">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-lg font-InterMe">
            About
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            It's Yatin Chaudhari
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I'm Joscript, a a software engineeer with over 5 years of
            experience, currently residing in Abuja, Nigeria. I have a deep
            passion for crafting purposeful interfaces and products. My main
            goal is to bridge the divide between people and technology,
            transforming intricate challenges into meaningful and seamless
            experiences.
          </motion.p>
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
