import Image from "next/image";
import Skills from "./components/Skills";
import TopSkills from "./components/TopSkills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import H1 from "./components/H1";
import Acceuil from "./components/Acceuil";

export default function Home() {
  return (
    <main
      //style={{ marginRight: "3em" }}
      // style={"background-image:url(./beams-home95.jpg)"}
      className="bg-img-page flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div id="Home" className="anchor"></div>
      <div className="pt-20">
        <Acceuil></Acceuil>
      </div>
      <div id="Skills" className="anchor"></div>
      <div className="pt-20">
        <Skills></Skills>
        <TopSkills></TopSkills>
      </div>
      <div id="Work" className="anchor"></div>
      <div className="pt-20">
        <Work></Work>
      </div>
      <div id="Contact" className="anchor"></div>
      <div className="pt-20">
        <Contact></Contact>
      </div>
    </main>
  );
}
