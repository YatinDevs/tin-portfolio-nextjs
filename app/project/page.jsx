import Link from "next/link";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { AiOutlinePlusCircle, AiOutlineDribbble } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationArrow1, CiTwitter, CiInstagram } from "react-icons/ci";
// import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Footer from "../Footer/footer";

const links = [
  {
    img: "/img/crazytv.png",
    title: "CrazyTV - Entertainment ",
    subtitle: ["Free tv shows streaming website."],
    icon: <BsChevronRight />,
    href: "/crazytv",
  },
  {
    img: "/img/pizza.png",
    title: "Food Application",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/foodapp",
  },
  {
    img: "/img/foot.png",
    title: "Travel Website",
    subtitle: ["Landing  page, illustration design"],
    // u can redirect to other sites here
    href: "/travelapp",
  },
  {
    img: "/img/wink.png",
    title: "Plastic Management System",
    subtitle: [
      "User-friendly interface, seamless user experience, and data security.",
    ],
    href: "/plasticmanage",
  },
];

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
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className="flex items-center mt-4  gap-x-2 ">
          <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
          <h1 className="text-neutral-700   dark:text-[#C0C0C0] text-lg font-InterMe">
            Projects
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            My Works
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Discover my portfolio, where purposeful interfaces meet captivating
            design. My work strives to enhance experiences and inspire.
          </p>
        </div>

        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-3 max-md:p-3 rounded-xl">
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Projects
              </h1>
            </div>

            <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex  items-center gap-x-1 ">
              <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                View All
              </button>
              <FiArrowRight className="text-neutral-500" />
            </div>
          </div>
          <div className="mt-6">
            <Link href={"/"}>
              {links.map((link) => (
                <div
                  key={link.title}
                  className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                >
                  <div className="flex items-center gap-x-4 max-md:flex-col max-md:items-start">
                    <div className="drop-shadow-md dark:bg-neutral-900/50 bg-white  p-2 rounded-full ">
                      <Image
                        className="w-10 h-10 object-cover rounded-full "
                        src={link.img}
                        alt=""
                        height={100}
                        width={100}
                      />
                    </div>

                    <div className="max-md:mt-5">
                      <h1 className="text-xl font-InterMe ">{link.title}</h1>
                      <p className="text-lg text-neutral-400 max-md:my-1">
                        {link.subtitle.map((subt) => (
                          <span key={subt}>{subt}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="max-md:hidden md:block">
                    <BsChevronRight />
                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>

        <div className="lg:px-7">
          <h1 className="md:text-4xl text-3xl  font-InterBo mt-10 my-3 dark:text-white text-neutral-800">
            Explore My Products
          </h1>

          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Some of the digital products that I worked on as side projects,
            explore them now
          </p>
        </div>

        <div>
          <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-6  mt-6 rounded-md">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                Products
              </h1>
            </div>

            <div className="mt-14">
              <Link href={"/"}>
                {projects.map((link) => (
                  <div
                    key={link.subtitle}
                    className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
                  >
                    <div className="flex  items-center gap-x-4">
                      <div className="drop-shadow-md ">
                        <Image
                          className="w-10 h-10 object-cover rounded-full "
                          src={link.img}
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>

                      <div>
                        <h1 className="text-xl font-InterMe">{link.title}</h1>
                      </div>
                    </div>

                    <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
                      <p className="text-sm font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
                        {link.subtitle}
                      </p>
                      <div className="">
                        <CiLocationArrow1 className="dark:text-neutral-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
