import { BsChevronRight } from "react-icons/bs";
export const projects = [
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

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/YatinDevs");
  return response.json();
};
