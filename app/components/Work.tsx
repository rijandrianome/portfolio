import { type } from "os";
import React from "react";
import H1 from "./H1";

type work = {
  id: number;
  date: string;
  title: string;
  description: string;
};

const Work = () => {
  let works: work[] = [
    {
      id: 1,
      date: "Mai 2012 - Aujourd'hui", //new Date(2012, 3, 1),
      title: "Consultant informatique à Inforce Madagascar",
      description:
        "Administrateur système : gérer/maintenir les serveurs informatiques (serveur de base de données, serveur d’application) de la société. " +
        "ainsi que des sauvegardes (tâches planifiées, automatisation, contrôles, …). Développement d’applications Web : Analyser les nouvelles demandes utilisateurs, corriger les anomalies du système existant. ",
    },
    {
      id: 2,
      date: "Février 2013 - Octobre 2013", //new Date(2013, 1, 1),
      title:
        "Consultant informatique à BICI (Bureau International de Consultance Informatique)",
      description: "Développement d'applications .NET MVC",
    },
    {
      id: 3,
      date: "Mai 2009 - Avril 2012", //new Date(2012, 3, 1),
      title: "Assistant du département organisation et informatique",
      description:
        "Rédaction cahier de charges et manuel de procédures. Développement d'applications Web",
    },
  ];

  return (
    <>
      <H1>Parcours professionnel</H1>
      <div className="grid grid-cols-1 gap-6 mt-12 w-4/5 pl-56">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {works.map((item, index) => (
            <li
              key={item.id}
              className={"mb-10 ml-6 " + (index === 0 ? "pt-10" : "")}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}{" "}
                {index === 0 && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Work;
