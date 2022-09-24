import { BsGrid,BsPersonCheck,BsJournalCheck,BsLayers,BsChat,BsAward } from "react-icons/bs";

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
    text: "Projects",
    icon: <BsJournalCheck className="link-icon" />,
    url: "/project",
  },
  {
    text: "Experience",
    icon: <BsAward className="link-icon" />,
    url: "/blog",
  },
  {
    text: "Works",
    icon: <BsLayers className="link-icon" />,
    url: "/contact",
  },
  {
    text: "Contact",
    icon: <BsChat className="link-icon" />,
    url: "/tutorial",
  },
];
