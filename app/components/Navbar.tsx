"use client";
import React, { useState } from "react";
//import profilImage from "../public/profil.png";
import Image from "next/image";

const css_active =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
const css_normal =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const onCLickMenu = (menu: string) => {
    setActive(menu);
    if (toggle) setToggle(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed-top">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#Home"
          className="flex items-center"
          onClick={() => setToggle(false)}
        >
          <Image
            className="rounded-full mr-3"
            src="/profil.png"
            alt=""
            width="50"
            height="75"
          ></Image>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Rija ANDRIANOME
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="navbar-default"
          className={
            !toggle
              ? "hidden w-full md:block md:w-auto"
              : "flex w-full md:block md:w-auto"
          }
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li key="linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rija-andrianome-b6a49a88/"
                data-rb-event-key="https://www.linkedin.com/in/rija-andrianome-b6a49a88/"
                className={active === "linkedin" ? css_active : css_normal}
                onClick={() => onCLickMenu("linkedin")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </li>
            <li key="git">
              <a
                target="_blank"
                href="https://github.com/rijandrianome"
                data-rb-event-key="https://github.com/rijandrianome"
                className={active === "git" ? css_active : css_normal}
                onClick={() => onCLickMenu("git")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </li>
            {/* <li key="mail">
              <a
                target="_blank"
                href="mailto:rijandrianome@gmail.com"
                data-rb-event-key="mailto:rijandrianome@gmail.com"
                className={active === "mail" ? css_active : css_normal}
                onClick={() => onCLickMenu("mail")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"></path>
                </svg>
              </a>
            </li> */}
            <li key="Skills">
              <a
                href="#Skills"
                className={active === "Skills" ? css_active : css_normal}
                onClick={() => onCLickMenu("Skills")}
              >
                Skills
              </a>
            </li>
            <li key="Work">
              <a
                href="#Work"
                className={active === "Work" ? css_active : css_normal}
                onClick={() => onCLickMenu("Work")}
              >
                Work
              </a>
            </li>
            <li key="Contact">
              <a
                href="#Contact"
                className={active === "Contact" ? css_active : css_normal}
                onClick={() => onCLickMenu("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-link nav-social"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
