import Image from "next/image";
import Skills from "./components/Skills";
import TopSkills from "./components/TopSkills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="Home" className="pt-72">
        <p>My home page</p>
      </div>
      <div id="Skills" className="anchor"></div>
      <div className="pt-72">
        <TopSkills></TopSkills>
        <Skills></Skills>
      </div>
      <div id="Work" className="pt-72">
        <h1>Work</h1>
      </div>
      <div id="Contact" className="anchor"></div>
      <div className="pt-72">
        <Contact></Contact>
      </div>
    </main>
  );
}
