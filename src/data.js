import {
  BsGrid,
  BsPersonCheck,
  BsJournalCheck,
  BsLayers,
  BsChat,
  BsAward,
} from "react-icons/bs";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { SiSass, SiJquery, SiExpress, SiRedux } from "react-icons/si";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";
export const sideBarMenu = [
  {
    text: "Home",
    icon: <BsGrid className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsPersonCheck className="link-icon" />,
    url: "/about",
  },
  {
    text: "Resume",
    icon: <BsAward className="link-icon" />,
    url: "/resume",
  },
  {
    text: "Works",
    icon: <BsLayers className="link-icon" />,
    url: "/works",
  },
  {
    text: "Projects",
    icon: <BsJournalCheck className="link-icon" />,
    url: "/project",
  },

  {
    text: "Contact",
    icon: <BsChat className="link-icon" />,
    url: "/contact",
  },
];
export const skillico = [
  {
    icon: <SiExpress className="skills-icon" />,
    spanText: "EXPRESS JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
  },
  {
    icon: <SiRedux className="skills-icon" />,
    spanText: "Redux",
    url: "https://redux.js.org/introduction/getting-started",
  },

  {
    icon: <IoLogoJavascript className="skills-icon" />,
    spanText: "JAVASCRIPT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  {
    icon: <SiSass className="skills-icon" />,
    spanText: "SASS",
    url: "",
  },

  {
    icon: <BsBootstrapFill className="skills-icon" />,
    spanText: "BOOTSTRAP",
    url: "",
  },

  {
    icon: <SiJquery className="skills-icon" />,
    spanText: "JQUERY",
    url: "",
  },
  {
    icon: <FaGit className="skills-icon" />,
    spanText: "GIT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <BsGithub className="skills-icon" />,
    spanText: "GITHUB",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },

  {
    icon: <FaNodeJs className="skills-icon" />,
    spanText: "NODE",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
  },

  {
    icon: <DiMongodb className="skills-icon" />,
    spanText: "MONGO DB",
    url: "https://www.mongodb.com/",
  },
  {
    icon: <AiFillHtml5 className="skills-icon" />,
    spanText: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];
