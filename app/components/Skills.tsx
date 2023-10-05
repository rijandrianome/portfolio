"use client";
import React, { useState, useEffect } from "react";
import H1 from "./H1";

type competence = {
  id: number;
  pourcent: number;
  name: string;
  //onClick: () => void;
};

const cssNormal =
  "px-4 py-2 text-xl text-gray-100 transition bg-gray-600 rounded-md h-14 w-44 hover:bg-gray-700";
const cssActive =
  "px-4 py-2 text-xl text-gray-100 transition bg-gray-600 rounded-md h-14 w-44 hover:bg-gray-700 font-bold ring-2 ring-gray-100";

const circumference = ((2 * 22) / 7) * 120;

const Skills = () => {
  let competences: competence[] = [
    { id: 1, pourcent: 70, name: "react" },
    { id: 2, pourcent: 50, name: "tailwind" },
    { id: 3, pourcent: 50, name: "bootstrap" },
    { id: 4, pourcent: 85, name: "typescript" },
  ];

  const getPourcent = (ident: number) => {
    return competences[ident - 1].pourcent;
  };

  const getDashOffset = (ident: number) => {
    return circumference - (getPourcent(ident) / 100) * circumference;
  };

  const [currentSkill, setCurrentSkill] = useState(1);
  const [dashOffset, setDashOffset] = useState(0);
  const [pourcent, setPourcent] = useState(0);

  const onClickSkill = (ident: number) => {
    console.log("ident " + ident);
    setCurrentSkill(ident);
    setPourcent(getPourcent(ident));
    setDashOffset(getDashOffset(ident));
  };

  useEffect(() => {
    setCurrentSkill(1);
    setPourcent(getPourcent(1));
    setDashOffset(getDashOffset(1));
  }, []);

  return (
    <div>
      <H1>Compétences</H1>
      <section
        x-data="skillDisplay"
        className="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
      >
        <div className="grid grid-cols-2 gap-6 mt-12">
          {competences.map((item, index) => (
            <button
              key={"btn" + item.id}
              className={currentSkill === item.id ? cssActive : cssNormal}
              x-text={item.name}
              onClick={() => onClickSkill(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div
          className="flex items-center justify-center"
          x-data={circumference}
        >
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              offset="60"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="text-blue-500 "
            />
          </svg>
          <span className="pl-1 absolute text-5xl" x-text={pourcent}>
            {pourcent}%
          </span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
