"use client";
import React from "react";
import Image from "next/image";
import brainIcon from "../public/img/badge/brain_icon.png";
import bkgImage from "../public/img/badge/background_image.png";
import html from "../public/img/badge/html.png";
import css from "../public/img/badge/css.png";
import java from "../public/img/badge/java.png";
import javascript from "../public/img/badge/javascript.png";
import typescript from "../public/img/badge/typescript.png";
import python from "../public/img/badge/python.png";
// import c from "../../images/badge/c";
import sql from "../public/img/badge/database.png";
import matlab from "../public/img/badge/matlab.png";
import bash from "../public/img/badge/bash.png";
import react from "../public/img/badge/react.png";
import angular from "../public/img/badge/angular.png";
import django from "../public/img/badge/django.png";
import node from "../public/img/badge/node.png";
import express from "../public/img/badge/express.svg";
import sqlite from "../public/img/badge/sqlite.png";
import mongodb from "../public/img/badge/mongodb.png";
import postgresql from "../public/img/badge/postgresql.png";
import firebase from "../public/img/badge/firebase.png";
import cpp from "../public/img/badge/cpp.png";
import figma from "../public/img/badge/figma.png";
import lucidchart from "../public/img/badge/lucidchart.png";
import "./skill.css";

const Skill = () => {
  const languages = [
    {
      title: "Programming Language",
      list: [
        { name: "HTML", badge: html, nameColor: "orange" },
        { name: "CSS", badge: css },
        {
          name: "Java",
          badge: java,
          badgeColor: "lightgray",
          nameColor: "#ff6363",
        },
        { name: "JavaScript", badge: javascript, nameColor: "#d9c548" },
        { name: "TypeScript", badge: typescript },
        { name: "C++", badge: cpp, badgeColor: "lightgray", nameColor: "#555" },
        { name: "SQL", badge: sql, badgeColor: "lightgray" },
      ],
    },
    {
      title: "Spoken Language",
      list: [
        { name: "English", textColor: "black" },
        { name: "Marathi", textColor: "black" },
        { name: "Hindi", textColor: "black" },
      ],
    },
  ];

  const toolsFrameworks = [
    {
      title: "Web Development",
      list: [
        { name: "React", badge: react, nameColor: "#4fd6cf" },
        // { name: "Angular", badge: angular, nameColor: "#ff6363" },
        { name: "SpringBoot", badge: django, nameColor: "green" },
        { name: "Node", badge: node, badgeColor: "lightgray" },
        {
          name: "Express",
          badge: express,
          badgeColor: "beige",
          nameColor: "#52a854",
        },
      ],
    },
    {
      title: "Database",
      list: [
        { name: "MySQL", badge: sqlite, badgeColor: "lightgray" },
        { name: "MongoDB", badge: mongodb, nameColor: "#52a854" },
        { name: "Firebase", badge: firebase, nameColor: "orange" },
      ],
    },

    {
      title: "UI/UX Design",
      list: [
        {
          name: "Figma",
          badge: figma,
          badgeColor: "lightgray",
          nameColor: "purple",
        },
        {
          name: "Lucidchart",
          badge: lucidchart,
          badgeColor: "lightgray",
          nameColor: "orange",
        },
      ],
    },
  ];

  const others = [
    {
      title: "Project Management Method",
      list: [{ name: "Agile" }, { name: "Git" }],
    },

    {
      title: "Relevant Coursework",
      list: [
        { name: "OS" },
        { name: "Visual Recognision" },
        { name: "DSAlgorithm" },
        { name: "Database Management" },
      ],
    },
  ];

  return (
    <div id="skill" className="skillContainer">
      <div className="headerContainer">
        <div className="header">
          <Image className="headerIcon" src={brainIcon} alt="" />
          <p className="headerTitle">Skill</p>
        </div>
        <div className="divider"></div>
        <div className="contentContainer">
          <Image className="backgroundImg" src={bkgImage} alt="" />
          <div className="contentSkill">
            <div className="content__left">
              <div className="colTitle">LANGUAGES</div>
              {languages.map((lang, idx, arr) => {
                return (
                  <div key={lang.title}>
                    <h1 className="colSubTitle">{lang.title}</h1>

                    {lang.list.map((langtype, id, arr) => {
                      return (
                        <div key={langtype.name} className="badge">
                          {langtype.badge && (
                            <Image
                              className="skillbadge"
                              style={
                                langtype.badgeColor && {
                                  backgroundColor: langtype.badgeColor,
                                }
                              }
                              src={langtype.badge && langtype.badge}
                              alt="languages"
                            />
                          )}
                          <p
                            key={id}
                            style={
                              langtype.textColor
                                ? {
                                    backgroundColor: "transparent",
                                    color: langtype.textColor,
                                  }
                                : { backgroundColor: langtype.nameColor }
                            }
                            className="skillEntry"
                          >
                            {langtype.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="content__mid">
              <div className="colTitle">FRAMEWORKS</div>
              {toolsFrameworks.map((tool, idx) => {
                return (
                  <div key={tool.title}>
                    <p className="colSubTitle">{tool.title}</p>
                    {tool.list.map((tools, idx) => {
                      return (
                        <div className="badge" key={tools.name}>
                          {tools.badge && (
                            <Image
                              className="skillbadge"
                              style={
                                tools.badgeColor && {
                                  backgroundColor: tools.badgeColor,
                                }
                              }
                              src={tools.badge && tools.badge}
                              alt=""
                            />
                          )}
                          <p
                            key={idx}
                            style={
                              tools.textColor
                                ? {
                                    backgroundColor: "transparent",
                                    color: tools.textColor,
                                  }
                                : { backgroundColor: tools.nameColor }
                            }
                            className="skillEntry"
                          >
                            {tools.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="content__right">
              <div className="colTitle">OTHERS</div>
              {others.map((subType, id) => {
                return (
                  <div key={subType.title}>
                    <p className="colSubTitle">{subType.title}</p>
                    {subType.list.map((entry, i) => {
                      return (
                        <div className="badge" key={entry.name}>
                          {entry.badge && (
                            <Image
                              className="skillbadge"
                              src={entry.badge && entry.badge}
                              alt=""
                              key={i}
                            />
                          )}
                          <p
                            key={i}
                            style={
                              entry.textColor
                                ? {
                                    backgroundColor: "transparent",
                                    color: entry.textColor,
                                  }
                                : { backgroundColor: entry.nameColor }
                            }
                            className="skillEntry"
                          >
                            {entry.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
