"use client";
import React, { useState, useEffect } from "react";

type competence = {
  id: number;
  pourcent: number;
  name: string;
  onClick: () => void;
};

const cssNormal =
  "px-4 py-2 text-xl text-gray-100 transition bg-gray-600 rounded-md h-14 w-44 hover:bg-gray-700";
const cssActive =
  "px-4 py-2 text-xl text-gray-100 transition bg-gray-600 rounded-md h-14 w-44 hover:bg-gray-700 font-bold ring-2 ring-gray-100";

let pourcent = 0;
let dasharray = 0;
let dashoffset = 0;
const circumference = ((2 * 22) / 7) * 120;

const TopSkills = () => {
  let competences: competence[] = [
    { id: 1, pourcent: 70, name: "react", onClick: () => {} },
    { id: 2, pourcent: 50, name: "tailwind", onClick: () => {} },
    { id: 3, pourcent: 50, name: "bootstrap", onClick: () => {} },
    { id: 4, pourcent: 85, name: "typescript", onClick: () => {} },
  ];

  const [currentSkill, setCurrentSkill] = useState(1);

  useEffect(() => {
    pourcent = competences[currentSkill - 1].pourcent;
    dasharray = circumference;
    dashoffset = circumference - (pourcent / 100) * circumference;
  }, [currentSkill]);

  return (
    <div>
      <h1 className="text-center">Skills</h1>
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
              onClick={() => setCurrentSkill(item.id)}
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
              stroke-width="30"
              fill="transparent"
              className="text-gray-700"
            />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              stroke-width="30"
              fill="transparent"
              offset="60"
              stroke-dasharray={dasharray}
              stroke-dashoffset={dashoffset}
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

export default TopSkills;
